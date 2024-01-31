import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';

export interface ProductsState {
	fetchedItems: IProduct[];
	reservedItems: IProduct[];
	total: number;
	countPerPage: number;
	page: number;
	error: string;
	fetching: boolean;
	sort: {
		name: string;
		toggle?: boolean;
	};
	search: {
		value: string;
	};
}

interface SortTypes {
	sort: 'rating' | 'price' | 'reset';
	toggle?: boolean;
}

const initialState: ProductsState = {
	fetchedItems: [],
	reservedItems: [],
	total: 0,
	page: 1,
	countPerPage: 12,
	error: '',
	fetching: true,
	sort: {
		name: '',
		toggle: true,
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

export type TypePages = 'page' | 'pageFavorites';

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
			const id = action.payload;
			anyTogglesInProduct(state, id, 'checked');
		},
		removeAllToggledProducts: (state) => {
			state.fetchedItems.forEach((item) => {
				item.checked = false;
			});
		},
		fetchingImageProduct: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload;
			anyTogglesInProduct(state, id, 'imgFetch', false);
		},
		sortProducts: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;

			// code
			console.log(sort, toggle);
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
			const id = action.payload;
			anyTogglesInProduct(state, id, 'favorite');
		},
		changePage: (state, action: PayloadAction<{ page: number }>) => {
			const { page } = action.payload;
			state.page = page;
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
	changePage,
} = actions;

export default reducer;
