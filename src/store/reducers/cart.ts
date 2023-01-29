import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';

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
			const uniqElements = new Set([...current(state.items)]);
			uniqElements.add(action.payload);
			state.items = Array.from(uniqElements);

			const priceArray: number[] = state.items.map((item) => Number(item.price));
			state.totalPrice = Number(priceArray.reduce((acc, curr) => acc + curr).toFixed(2));
		},
	},
});

export const { addToCart } = cartReducer.actions;

export default cartReducer.reducer;
