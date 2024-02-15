import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/services';

export interface CartState {
	items: IProduct[];
	totalPrice: number;
	countPerPage: number;
	page: number;
}

interface StateAndProps {
	state: CartState;
	id: number;
}

const initialState: CartState = {
	items: [],
	totalPrice: 0,
	countPerPage: 8,
	page: 1,
};

const getCurrentItem = ({ state, id }: StateAndProps) => state.items.find((item) => item.id === id);

const changeCount = ({ state, id, type }: StateAndProps & { type: 'increase' | 'decrease' }) => {
	const cur = getCurrentItem({ state, id });
	const sign = type === 'increase' ? '+' : '-';
	if (cur?.count) cur.count = +`${cur.count} ${sign} 1`;
};

const calculateTotalPrice = (state: CartState) => {
	state.totalPrice = !state.items.length ? 0 : Number(state.items.reduce((acc: number, curr) => acc + curr.price, 0));
};

const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<IProduct>) => {
			state.items.push(payload);
			calculateTotalPrice(state);
		},
		deleteFromCart: (state, { payload }: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== payload);
			calculateTotalPrice(state);
			if (state.items.length === state.countPerPage * state.page - state.countPerPage) state.page -= 1;
		},
		increaseCount: (state, { payload }: PayloadAction<number>) => {
			changeCount({ state, id: payload, type: 'increase' });
		},
		decreaseCount: (state, { payload }: PayloadAction<number>) => {
			changeCount({ state, id: payload, type: 'decrease' });
		},
		trashAll: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
		changePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload;
		},
	},
});

const { actions, reducer } = cartReducer;

export const { addToCart, deleteFromCart, increaseCount, decreaseCount, trashAll, changePage } = actions;

export default reducer;
