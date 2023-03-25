import { configureStore } from '@reduxjs/toolkit';

// import { listener, persistState } from '@/store/localStore';
import CartReducer from '@/store/reducers/cart';
import ProductsReducer from '@/store/reducers/products';

const rootReducer = {
	cart: CartReducer,
	products: ProductsReducer,
};

export const store = configureStore({
	reducer: rootReducer,
	// preloadedState: persistState(),
});

// store.subscribe(() => listener(store));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const cartStore = (state: RootState) => state.cart;
export const productsStore = (state: RootState) => state.products;

export default store;
