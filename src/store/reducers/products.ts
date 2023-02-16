import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

interface ProductsState {
	fetchedItems: IProduct[];
	items: IProduct[];
	total: number;
	page: number;
	count: number;
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
	sort: keyof IProduct;
	toggle?: boolean;
}

const initialState: ProductsState = {
	fetchedItems: [],
	items: [],
	total: 0,
	page: 1,
	count: 12,
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

const changeStateSort = (state: ProductsState, payload: SortTypes) => {
	state.sort = {
		name: payload.sort,
		toggle: payload.toggle,
	};
};

const toggleItems = (array: IProduct[], id: number | null) => {
	array.forEach((item) => {
		if (item.id === id) item.checked = !item.checked;
	});
};

type SetProductsPayload = {
	products: IProduct[];
	total: number;
	page: number;
	count: number;
};

export const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<SetProductsPayload>) => {
			const { products, total, count, page } = action.payload;

			state.fetchedItems = products;
			state.items = state.fetchedItems;

			state.total = total;
			state.page = page;
			state.count = count;
		},
		fetching: (state, action: PayloadAction<boolean>) => {
			state.fetching = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		toggleProduct: (state, action: PayloadAction<IProduct>) => {
			toggleItems(state.items, action.payload.id);
			toggleItems(state.fetchedItems, action.payload.id);
		},
		fetchingImageProduct: (state, action: PayloadAction<{ id: number; fetch: boolean }>) => {
			const { fetch, id } = action.payload;
			state.items.forEach((item) => {
				if (item.id === id) item.imgFetch = fetch;
			});
			state.fetchedItems = state.items;
		},
		sortProducts: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;
			changeStateSort(state, action.payload);

			state.items.sort((a, b) => {
				if (a[sort] && b[sort]) {
					if (Number(a[sort]) > Number(b[sort])) return -1;
					if (Number(a[sort]) < Number(b[sort])) return 1;
				}
				return 0;
			});

			if (toggle) state.items = state.items.reverse();
		},
		searchProduct: (state, action: PayloadAction<string>) => {
			state.search.value = action.payload.trim();

			if (state.search.value.length) {
				state.items = state.fetchedItems.filter((item) =>
					item.title.toLowerCase().includes(state.search.value.toLowerCase())
				);
			} else state.items = state.fetchedItems;
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
			state.search.value = '';
		},
	},
});

export const {
	setProducts,
	fetching,
	setError,
	toggleProduct,
	fetchingImageProduct,
	sortProducts,
	searchProduct,
	changePage,
} = productsReducer.actions;

export default productsReducer.reducer;
