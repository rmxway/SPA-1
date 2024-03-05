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

	if (cur?.count && type === 'increase') cur.count += 1;
	if (cur?.count && type === 'decrease') cur.count -= 1;
};

const calculateTotalPrice = (state: CartState) => {
	state.totalPrice = !state.items.length
		? 0
		: Number(state.items.reduce((acc: number, curr) => acc + curr.price * (curr.count || 1), 0));
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
	},
});

const { actions, reducer } = cartReducer;

export const { addToCart, deleteFromCart, increaseCount, decreaseCount, trashAll, changePage } = actions;

export default reducer;
