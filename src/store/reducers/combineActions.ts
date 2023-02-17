import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { addToCart, deleteFromCart } from '@/store/reducers/cart';
import { searchProduct, sortProducts, toggleProduct } from '@/store/reducers/products';

const { dispatch } = store;

export const searchProducts = (searchText: string) => {
	const { products } = store.getState();
	dispatch(searchProduct(searchText));
	dispatch(sortProducts({ sort: products.sort.name as keyof IProduct, toggle: products.sort.toggle }));
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
