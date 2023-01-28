import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

import type { RootState } from '../store';

interface CartState {
	items: IProduct[];
	totalPrice: number;
}

const initialState: CartState = {
	items: [],
	totalPrice: 0,
};

const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const uniqItems = new Set([...current(state.items), action.payload]);
			state.items = [...uniqItems];

			const priceArray: number[] = state.items.map((item) => Number(item.price));
			state.totalPrice = Number(priceArray.reduce((acc, curr) => acc + curr).toFixed(2));
		},
	},
});

export const { addToCart } = cartReducer.actions;

export const cartStore = (state: RootState) => state.cart;

export default cartReducer.reducer;
