import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

const rootReducer = combineReducers({
	cart: CartReducer,
	products: ProductsReducer,
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
	});

export const store = makeConfiguredStore(reducer);

export const makeStore = () => {
	const isServer = typeof window === 'undefined';

	if (isServer) {
		return store;
	}
	// // we need it only on client side
	// const { persistStore, persistReducer } = require('redux-persist');
	// const storage = require('redux-persist/lib/storage').default;

	// const persistConfig = {
	// 	key: 'nextjs',
	// 	whitelist: ['fromClient'], // make sure it does not clash with server keys
	// 	storage,
	// };

	// const persistedReducer = persistReducer(persistConfig, reducer);
	// _store = makeConfiguredStore(rootReducer);

	// store.__persistor = persistStore(store); // Nasty hack

	return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export const cartStore = (state: RootState) => state.cart;
export const productsStore = (state: RootState) => state.products;

export const wrapper = createWrapper(makeStore);
