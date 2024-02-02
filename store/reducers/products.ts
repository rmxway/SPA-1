import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';

export interface SortTypes {
	name: 'rating' | 'price' | 'default';
	toggle?: boolean;
}

export type TypePages = 'products' | 'favorites';

export interface ProductsState {
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
	fetchedItems: [],
	reservedItems: [],
	total: 0,
	page: 1,
	typePage: 'products',
	countPerPage: 4,
	countFavorites: 0,
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

const initialItems = (state: ProductsState, products: IProduct[]) => {
	if (state.reservedItems.length === products.length) return;

	products = products.map((product) => ({
		...product,
		imgFetch: true,
		checked: false,
		favorite: false,
	}));

	// there was some product on the first page
	if (state.fetchedItems.length === 1) {
		const index = products.findIndex((product) => product.id === state.fetchedItems[0].id);
		products[index] = current(state.fetchedItems[0]);
	}

	state.total = products.length;

	state.fetchedItems = [...products];
	state.reservedItems = [...state.fetchedItems];
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

const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetching: (state, action: PayloadAction<boolean>) => {
			state.fetching = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		addOneProduct: (state, action: PayloadAction<IProduct>) => {
			state.fetchedItems[0] = action.payload;
			state.reservedItems[0] = action.payload;
		},
		addProducts: (state, action: PayloadAction<IProduct[]>) => {
			initialItems(state, action.payload);
		},
		toggleProduct: (state, action: PayloadAction<number>) => {
			anyTogglesInProduct(state, action.payload, 'checked');
		},
		removeAllToggledProducts: (state) => {
			state.fetchedItems.forEach((item) => {
				item.checked = false;
			});
		},
		fetchingImageProduct: (state, action: PayloadAction<number>) => {
			anyTogglesInProduct(state, action.payload, 'imgFetch', false);
		},
		sortProducts: (state, action: PayloadAction<SortTypes>) => {
			const { name, toggle } = action.payload;

			state.sort.name = name;
			state.sort.toggle = toggle;
			state.page = 1;

			if (name === 'default') {
				state.sort.toggle = false;
				state.search.value = '';
				state.fetchedItems = state.reservedItems;
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
		searchValue: (state, action: PayloadAction<string>) => {
			state.search.value = action.payload;
		},
		searchProducts: (state, action: PayloadAction<string>) => {
			const searchText = action.payload.toLowerCase().trim();
			state.page = 1;
			state.fetchedItems = state.reservedItems.filter((item) => item.title.toLowerCase().includes(searchText));
		},
		toggleFavorite: (state, action: PayloadAction<number>) => {
			anyTogglesInProduct(state, action.payload, 'favorite');

			state.countFavorites = state.reservedItems.filter((item) => item.favorite).length;
			if (state.countPerPage === state.countFavorites && state.typePage === 'favorites') state.page = 1;
		},
		removeAllFavorites: (state) => {
			state.reservedItems.forEach((item) => {
				item.favorite = false;
			});
			state.fetchedItems = state.reservedItems;
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		changeTypePage: (state, action: PayloadAction<TypePages>) => {
			if (state.typePage === action.payload) return;
			state.typePage = action.payload;
			state.page = 1;
		},
	},
});

const { actions, reducer } = productsReducer;

export const {
	fetching,
	setError,
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
