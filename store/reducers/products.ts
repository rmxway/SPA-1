import { createSelector, createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';

export interface SortTypes {
	name: 'rating' | 'price' | 'default';
	toggle?: boolean;
}

export type TypePages = 'products' | 'favorites';

export interface ProductsState {
	title: string;
	fetchedItems: IProduct[];
	reservedItems: IProduct[];
	total: number;
	countPerPage: number;
	countFavorites: number;
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
	error: '',
	fetching: false,
	sort: {
		name: 'default',
		toggle: false,
	},
	search: {
		value: '',
	},
};

const initialItems = (state: ProductsState, products: IProduct[]) => {
	if (state.reservedItems.length === products.length) return;

	products.forEach((product) => {
		product.count = 1;
	});

	// there was some product on the first page
	if (state.fetchedItems.length === 1) {
		const index = products.findIndex((product) => product.id === state.fetchedItems[0].id);
		products[index] = current(state.fetchedItems[0]);
	}

	state.total = products.length;

	state.fetchedItems = [...products];
	state.reservedItems = state.fetchedItems;
	state.fetching = false;
	state.error = '';
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

const resetItems = (state: ProductsState) => {
	state.page = 1;
	state.sort.toggle = false;
	state.search.value = '';
	state.fetchedItems = state.reservedItems;
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
		addOneProduct: (state, { payload }: PayloadAction<IProduct>) => {
			state.fetchedItems[0] = payload;
			state.reservedItems = state.fetchedItems;
		},
		addProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
			initialItems(state, payload);
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
			state.page = 1;
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
	},
});

const { actions, reducer } = productsReducer;

export const {
	fetching,
	setError,
	setTitle,
	toggleProduct,
	addOneProduct,
	addProducts,
	removeAllToggledProducts,
	fetchingImageProduct,
	sortProducts,
	searchValue,
	searchProducts,
	toggleFavorite,
	removeAllFavorites,
	changePage,
	changeTypePage,
} = actions;

export default reducer;
