import { store } from '@/store';
import { addToCart, deleteFromCart, trashAll } from '@/store/reducers/cart';
import { changeCategory, removeAllToggledProducts, sortProducts, toggleProduct } from '@/store/reducers/products';

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

export const changeCategoryWithSort = (name: string) => {
	const { products } = store.getState();
	dispatch(changeCategory(name));

	if (products.sort.name !== 'default') {
		const { name: sortName, toggle } = products.sort;
		dispatch(sortProducts({ name: sortName, toggle }));
	}
};
