import { store } from '@/store';
import { addToCart, deleteFromCart, trashAll } from '@/store/reducers/cart';
import { removeAllToggledProducts, toggleProduct } from '@/store/reducers/products';

const { dispatch } = store;

export const moveToCart = (id: number) => {
	const { products } = store.getState();
	dispatch(toggleProduct(id));
	const addedProduct = products.reservedItems.find((item) => item.id === id);

	if (addedProduct) {
		dispatch(addToCart(addedProduct));
	}
};

export const removeFromCart = (id: number) => {
	dispatch(toggleProduct(id));
	dispatch(deleteFromCart(id));
};

export const removeAllProducts = () => {
	dispatch(trashAll());
	dispatch(removeAllToggledProducts());
};
