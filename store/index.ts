import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

const persistConfig = {
	key: 'wholeStore',
	storage,
};

const rootReducer = combineReducers({
	cart: CartReducer,
	products: ProductsReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
			},
		}),
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
