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

const calculateTotalPrice = (state: CartState) => {
	const priceArray: number[] = state.items.map((item) => Number(item.price));
	state.totalPrice = !priceArray.length ? 0 : Number(priceArray.reduce((acc, curr) => acc + curr).toFixed(2));
};

const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const uniqElements = new Set([...current(state.items)]);
			uniqElements.add(action.payload);
			state.items = Array.from(uniqElements);
			calculateTotalPrice(state);
		},
		deleteFromCart: (state, action: PayloadAction<number>) => {
			state.items = current(state).items.filter((item) => item.id !== action.payload);
			calculateTotalPrice(state);
		},
	},
});

export const { addToCart, deleteFromCart } = cartReducer.actions;

export default cartReducer.reducer;
