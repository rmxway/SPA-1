import { combineReducers, configureStore } from '@reduxjs/toolkit';

import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

const rootReducer = combineReducers({
	cart: CartReducer,
	products: ProductsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

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

export const cartStore = (state: RootState) => state.cart;
export const productsStore = (state: RootState) => state.products;
