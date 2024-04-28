import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { api } from '@/store/api';
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
	version: 1,
};

const appReducer = combineReducers({
	products: ProductsReducer,
	cart: CartReducer,
	[api.reducerPath]: api.reducer,
});

const rootReducer = (state: ReturnType<typeof appReducer>, action: Action) => {
	switch (action.type) {
		case 'store/clear':
			localStorage.removeItem('persist:wholeStore');
			return undefined;
		default:
			return appReducer(state, action);
	}
};

const persistedReducers = persistReducer(persistConfig, rootReducer as typeof appReducer);

export const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
			},
		}).concat(api.middleware),
});

export const persistor = persistStore(store);

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
