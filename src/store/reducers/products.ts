import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

interface ProductsState {
	items: IProduct[];
	error: string;
	isLoading: boolean;
	sort: {
		name: string;
		toggle: boolean;
	};
}

interface SortTypes {
	sort: keyof IProduct;
	toggle: boolean;
}

const initialState: ProductsState = {
	items: [],
	error: '',
	isLoading: false,
	sort: {
		name: '',
		toggle: true,
	},
};

const changeStateSort = (state: ProductsState, payload: SortTypes) => {
	state.sort = {
		name: payload.sort,
		toggle: payload.toggle,
	};
};

export const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.items = action.payload;
		},
		toggleProduct: (state, action: PayloadAction<IProduct>) => {
			state.items.forEach((item) => {
				if (item.id === action.payload.id) item.checked = !item.checked;
			});
		},
		sortPriceProduct: (state, action: PayloadAction<SortTypes>) => {
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
		sortRatingProduct: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;
			changeStateSort(state, action.payload);

			state.items.sort((a, b) => {
				if (a[sort] && b[sort]) {
					if (Number(a.rating?.rate) > Number(b.rating?.rate)) return -1;
					if (Number(a.rating?.rate) < Number(b.rating?.rate)) return 1;
				}
				return 0;
			});

			if (toggle) state.items = state.items.reverse();
		},
	},
});

export const { getProducts, toggleProduct, sortPriceProduct, sortRatingProduct } = productsReducer.actions;

export default productsReducer.reducer;
