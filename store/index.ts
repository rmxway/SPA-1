import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { VERSION } from '@/services';
import { api } from '@/store/api';
import { checkVersion } from '@/store/localStore';
import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

const createNoopStorage = () => ({
	getItem(key: string): Promise<string | null> {
		return Promise.resolve(key);
	},
	setItem(key: string, item: string): Promise<string> {
		return Promise.resolve(item);
	},
	removeItem() {
		return Promise.resolve();
	},
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
	key: 'wholeStore',
	storage,
	version: +VERSION,
	blacklist: ['navigation'],
};

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
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
		}).concat(api.middleware),
});

export const makeStore = () => {
	const isServer = typeof window === 'undefined';

	if (isServer) {
		return store;
	}

	return store;
};

checkVersion();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];

export const cartStore = (state: RootState) => state.cart;
export const productsStore = (state: RootState) => state.products;
