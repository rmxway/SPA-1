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
		checkedProduct: (state, action: PayloadAction<number>) => {
			console.log('Checked', state.items, action);
		},
	},
});

export const { getProducts, checkedProduct } = productsReducer.actions;

export default productsReducer.reducer;
