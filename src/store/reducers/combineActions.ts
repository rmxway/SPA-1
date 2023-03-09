// import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { addToCart, deleteFromCart } from '@/store/reducers/cart';
import { searchProduct, toggleProduct } from '@/store/reducers/products';

const { dispatch } = store;

export const searchProducts = (searchText: string) => {
	dispatch(searchProduct(searchText));
};

export const moveToCart = (id: number) => {
	const { products } = store.getState();
	dispatch(toggleProduct(id));
	const addedProduct = products.items.find((item) => item.id === id);

	if (addedProduct) dispatch(addToCart(addedProduct));
};

export const removeFromCart = (id: number) => {
	dispatch(toggleProduct(id));
	dispatch(deleteFromCart(id));
};
