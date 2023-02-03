import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

interface ProductsState {
	fetchedItems: IProduct[];
	items: IProduct[];
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

export const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.fetchedItems = action.payload;
			state.items = state.fetchedItems;
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
		sortProduct: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;
			changeStateSort(state, action.payload);

			if (sort === 'price') {
				state.items.sort((a, b) => {
					if (a[sort] && b[sort]) {
						if (Number(a[sort]) > Number(b[sort])) return -1;
						if (Number(a[sort]) < Number(b[sort])) return 1;
					}
					return 0;
				});
			}

			if (sort === 'rating') {
				state.items.sort((a, b) => {
					if (a[sort] && b[sort]) {
						if (Number(a.rating?.rate) > Number(b.rating?.rate)) return -1;
						if (Number(a.rating?.rate) < Number(b.rating?.rate)) return 1;
					}
					return 0;
				});
			}

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
	},
});

export const { getProducts, fetching, setError, toggleProduct, sortProduct, searchProduct } = productsReducer.actions;

export default productsReducer.reducer;
