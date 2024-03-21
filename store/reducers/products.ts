import { createSelector, createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';
import { api, ResponseProducts } from '@/store/api';

export interface SortTypes {
	name: 'rating' | 'price' | 'default';
	toggle?: boolean;
}

export type TypePages = 'products' | 'favorites';

interface Category {
	name: 'all' | string;
	active: boolean;
}

export interface ProductsState {
	title: string;
	fetchedItems: IProduct[];
	reservedItems: IProduct[];
	total: number;
	countPerPage: number;
	countFavorites: number;
	categories: Category[];
	page: number;
	typePage: TypePages;
	error: string;
	fetching: boolean;
	sort: SortTypes;
	search: {
		value: string;
	};
}

const initialState: ProductsState = {
	title: '',
	fetchedItems: [],
	reservedItems: [],
	total: 0,
	page: 1,
	typePage: 'products',
	countPerPage: 12,
	countFavorites: 0,
	categories: [],
	error: '',
	fetching: true,
	sort: {
		name: 'default',
		toggle: false,
	},
	search: {
		value: '',
	},
};

const initialItems = (state: ProductsState, response: ResponseProducts) => {
	const { data, categories } = response;
    state.fetching = false;

	if (state.reservedItems.length === data.length) return;

	// there is some product on the first page
	if (state.fetchedItems.length === 1) {
		const index = data.findIndex((product) => product.id === state.fetchedItems[0].id);
		data[index] = current(state.fetchedItems[0]);
	}

	state.total = data.length;

	state.categories.push(
		...categories.map((item) => ({
			name: item,
			active: false,
		})),
	);

	state.categories[0].active = true;

	state.fetchedItems = [...data];
	state.reservedItems = state.fetchedItems;
	state.error = '';
};

const initialOneProduct = (state: ProductsState, item: IProduct) => {
	state.fetchedItems[0] = item;
	state.fetching = false;

	state.reservedItems = state.fetchedItems;
};

const anyTogglesInProduct = (
	state: ProductsState,
	id: number,
	type: 'checked' | 'favorite' | 'imgFetch',
	boo?: boolean,
) => {
	const toggleInArray = (array: IProduct[]) => {
		const currentItem = array.find((item) => item.id === id);
		if (currentItem) currentItem[type] = boo ?? !currentItem[type];
	};

	toggleInArray(state.reservedItems);
	toggleInArray(state.fetchedItems);
};

const calcCategory = (state: ProductsState, name: string, reset?: boolean) => {
	state.categories.forEach((category) => {
		category.active = category.name === name;
	});

	state.page = 1;

	if (reset) return;

	if (name === 'all' || reset) {
		state.fetchedItems = state.reservedItems;
	} else {
		state.fetchedItems = state.reservedItems.filter((item) => item.category === name);
	}
};

const resetItems = (state: ProductsState, category = true) => {
	state.page = 1;
	state.sort.name = 'default';
	state.sort.toggle = false;
	state.search.value = '';
	state.fetchedItems = state.reservedItems;
	state.fetching = false;
	if (category) calcCategory(state, 'all', true);
};

export const favoritesItemsMemoized = createSelector([(state: ProductsState) => state.fetchedItems], (fetchedItems) =>
	fetchedItems.filter((item) => item.favorite),
);

const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetching: (state, { payload }: PayloadAction<boolean>) => {
			state.fetching = payload;
		},
		setError: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
		},
		setTitle: (state, { payload }: PayloadAction<string>) => {
			state.title = payload;
		},
		toggleProduct: (state, { payload }: PayloadAction<number>) => {
			anyTogglesInProduct(state, payload, 'checked');
		},
		removeAllToggledProducts: (state) => {
			state.fetchedItems.forEach((item) => {
				item.checked = false;
			});
			state.reservedItems = state.fetchedItems;
		},
		fetchingImageProduct: (state, { payload }: PayloadAction<number>) => {
			anyTogglesInProduct(state, payload, 'imgFetch', false);
		},
		sortProducts: (state, { payload }: PayloadAction<SortTypes>) => {
			const { name, toggle } = payload;

			state.sort.name = name;
			state.sort.toggle = toggle;
			state.page = 1;

			if (name === 'default') {
				resetItems(state);
			} else {
				state.fetchedItems.sort((a, b) => {
					if (name !== undefined && a[name] && b[name]) {
						return Number(a[name]) > Number(b[name]) ? -1 : 1;
					}
					return 0;
				});

				if (toggle) state.fetchedItems = state.fetchedItems.reverse();
			}
		},
		searchValue: (state, { payload }: PayloadAction<string>) => {
			state.search.value = payload;
		},
		searchProducts: (state, { payload }: PayloadAction<string>) => {
			const searchText = payload.toLowerCase().trim();
			calcCategory(state, 'all');
			state.fetchedItems = state.reservedItems.filter((item) => item.title.toLowerCase().includes(searchText));
		},
		toggleFavorite: (state, { payload }: PayloadAction<number>) => {
			anyTogglesInProduct(state, payload, 'favorite');

			state.countFavorites = state.reservedItems.filter((item) => item.favorite).length;
			if (
				state.countFavorites === state.countPerPage * state.page - state.countPerPage &&
				state.typePage === 'favorites'
			)
				state.page -= 1;
		},
		removeAllFavorites: (state) => {
			state.reservedItems.forEach((item) => {
				item.favorite = false;
			});
			state.fetchedItems = state.reservedItems;
			state.countFavorites = 0;
		},
		changePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload;
		},
		changeTypePage: (state, { payload }: PayloadAction<TypePages>) => {
			if (state.typePage === payload) return;
			state.fetchedItems = state.reservedItems;
			state.typePage = payload;
			resetItems(state);
		},
		changeCategory: (state, { payload: name }: PayloadAction<string>) => {
			resetItems(state, false);
			calcCategory(state, name);
		},
	},
	extraReducers: (builder) => {
		builder
			// Products
			.addMatcher(api.endpoints.getProducts.matchPending, (state) => {
				state.fetching = true;
			})
			.addMatcher(
				api.endpoints.getProducts.matchFulfilled,
				(state, { payload: response }: PayloadAction<ResponseProducts>) => {
					initialItems(state, response);
				},
			)
			.addMatcher(api.endpoints.getProducts.matchRejected, (state) => {
				state.error = 'Something went wrong';
				state.fetching = false;
				state.fetchedItems = [];
			})
			// Product
			.addMatcher(api.endpoints.getProduct.matchPending, (state) => {
				state.fetching = true;
				state.fetchedItems = [];
			})
			.addMatcher(
				api.endpoints.getProduct.matchFulfilled,
				(state, { payload: item }: PayloadAction<IProduct>) => {
					initialOneProduct(state, item);
				},
			)
			.addMatcher(api.endpoints.getProduct.matchRejected, (state) => {
				state.error = 'Something went wrong';
				state.fetching = false;
				state.fetchedItems = [];
			});
	},
});

const { actions, reducer } = productsReducer;

export const {
	fetching,
	setError,
	setTitle,
	toggleProduct,
	removeAllToggledProducts,
	fetchingImageProduct,
	sortProducts,
	searchValue,
	searchProducts,
	toggleFavorite,
	removeAllFavorites,
	changePage,
	changeTypePage,
	changeCategory,
} = actions;

export default reducer;
