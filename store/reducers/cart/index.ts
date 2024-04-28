import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartState, IProduct } from '@/services';

import { calculateTotalPrice, changeCount } from './helpers';

export const initialState: CartState = {
	items: [],
	totalPrice: 0,
	countPerPage: 8,
	page: 1,
	step: 1,
};

const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload: item }: PayloadAction<IProduct>) => {
			state.items.push({
				...item,
				count: 1,
			});
			calculateTotalPrice(state);
		},
		deleteFromCart: (state, { payload }: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== payload);
			calculateTotalPrice(state);
			if (state.items.length === state.countPerPage * state.page - state.countPerPage && state.page !== 1)
				state.page -= 1;
		},
		increaseCount: (state, { payload: id }: PayloadAction<number>) => {
			changeCount({ state, id, type: 'increase' });
			calculateTotalPrice(state);
		},
		decreaseCount: (state, { payload: id }: PayloadAction<number>) => {
			changeCount({ state, id, type: 'decrease' });
			calculateTotalPrice(state);
		},
		trashAll: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
		changePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload;
		},
		changeStep: (state, { payload }: PayloadAction<number>) => {
			state.step = payload;
		},
	},
});

const { actions, reducer } = cartReducer;

export const { addToCart, deleteFromCart, increaseCount, decreaseCount, trashAll, changePage, changeStep } = actions;

export default reducer;
