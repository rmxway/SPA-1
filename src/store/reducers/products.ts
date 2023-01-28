import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

interface ProductsState {
	items: IProduct[];
}

const initialState: ProductsState = {
	items: [],
};

export const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.items = action.payload;
		},
	},
});

export const { getProducts } = productsReducer.actions;

export default productsReducer.reducer;
