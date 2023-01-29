import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

interface ProductsState {
	items: IProduct[];
	error: string;
	isLoading: boolean;
}

const initialState: ProductsState = {
	items: [],
	error: '',
	isLoading: false,
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
	},
});

export const { getProducts, toggleProduct } = productsReducer.actions;

export default productsReducer.reducer;
