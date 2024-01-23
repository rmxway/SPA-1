import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { HYDRATE } from 'next-redux-wrapper';

import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

// import { api } from './api';

const rootReducer = combineReducers({
	cart: CartReducer,
	products: ProductsReducer,
	// [api.reducerPath]: api.reducer,
});

export type ReducerType = typeof rootReducer;

const reducer: ReducerType = (state, action) => {
	const recreateState = { ...state, ...action.payload };

	switch (action.type) {
		case HYDRATE:
			return recreateState;
		default:
			return rootReducer(state, action);
	}
};

const makeConfiguredStore = (anyReducer: ReducerType) =>
	configureStore({
		reducer: anyReducer,
		// middleware: (gDM) => gDM().concat(api.middleware),
	});

export const store = makeConfiguredStore(reducer);

export const makeStore = () => {
	const isServer = typeof window === 'undefined';

	if (isServer) {
		return store;
	}

	return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export const cartStore = (state: RootState) => state.cart;
export const productsStore = (state: RootState) => state.products;

// setupListeners(store.dispatch);
