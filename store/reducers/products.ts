import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';
import { api } from '@/store/api';

export interface ProductsState {
	fetchedItems: IProduct[];
	currentItems: IProduct[];
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
	currentItems: [],
	total: 0,
	page: 1,
	countPerPage: 12,
	error: '',
	fetching: false,
	sort: {
		name: '',
		toggle: true,
	},
	search: {
		value: '',
	},
};

const initialItems = (state: ProductsState, products: IProduct[]) => {
	products.forEach((product) => {
		product.imgFetch = true;
		product.favorite = false;
		product.checked = false;
	});

	state.total = products.length;

	// there was some product on the first page
	if (state.fetchedItems.length === 1) {
		const index = products.findIndex((product) => product.id === state.fetchedItems[0].id);
		products[index] = current(state.fetchedItems[0]);
	}

	state.fetchedItems = [...products];
	state.fetching = false;
	state.error = '';
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
		addProducts: (state, action: PayloadAction<IProduct[]>) => {
			initialItems(state, action.payload);
		},
		toggleProduct: (state, action: PayloadAction<number>) => {
			const id = action.payload;

			const currentItem = state.fetchedItems.find((item) => item.id === id);
			if (currentItem) currentItem.checked = !currentItem.checked;
		},
		removeAllToggledProducts: (state) => {
			state.fetchedItems.forEach((item) => {
				item.checked = false;
			});
		},
		fetchingImageProduct: (state, action: PayloadAction<{ id: number; fetch: boolean }>) => {
			const { fetch, id } = action.payload;
			const el = state.fetchedItems.find((item) => item.id === id);
			if (el) el.imgFetch = fetch;
		},
		sortProducts: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;
			console.log(sort, toggle);
		},
		searchProduct: (state, action: PayloadAction<string>) => {
			state.search.value = action.payload.trim();

			// code
		},
		toggleFavorite: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const currentItem = state.fetchedItems.find((item) => item.id === id);
			if (currentItem) currentItem.favorite = !currentItem.favorite;
		},
		changePage: (state, action: PayloadAction<{ page: number }>) => {
			const { page } = action.payload;
			state.page = page;
		},
		setCurrentItems: (state, action: PayloadAction<{ items: IProduct[]; page: number }>) => {
			const { items } = action.payload;

			const filteredItems = items.length
				? items.splice((state.page - 1) * state.countPerPage, state.countPerPage)
				: [];
			state.currentItems = filteredItems;
		},
	},
	extraReducers(builder) {
		builder
			// Products
			.addMatcher(api.endpoints.getProducts.matchPending, (state) => {
				state.fetching = true;
				state.error = '';
			})
			.addMatcher(api.endpoints.getProducts.matchFulfilled, (state, action: PayloadAction<IProduct[]>) => {
				const products: IProduct[] = action.payload;
				initialItems(state, products);
			})
			.addMatcher(api.endpoints.getProducts.matchRejected, (state, action) => {
				state.error = String(action.payload?.status);
				state.fetching = false;
			})
			// Product
			.addMatcher(api.endpoints.getProduct.matchPending, (state) => {
				state.fetching = true;
				state.error = '';
			})
			.addMatcher(api.endpoints.getProduct.matchFulfilled, (state, action: PayloadAction<IProduct>) => {
				const product: IProduct = action.payload;

				state.fetchedItems = [product];
				state.fetching = false;
				state.error = '';
			})
			.addMatcher(api.endpoints.getProduct.matchRejected, (state, action) => {
				state.error = String(action.payload?.status);
				state.fetching = false;
			});
	},
});

const { actions, reducer } = productsReducer;

export const {
	fetching,
	setError,
	toggleProduct,
	addProducts,
	removeAllToggledProducts,
	fetchingImageProduct,
	sortProducts,
	searchProduct,
	toggleFavorite,
	changePage,
	setCurrentItems,
} = actions;

export default reducer;
