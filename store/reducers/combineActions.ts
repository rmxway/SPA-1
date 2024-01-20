import { store } from '@/store';
import { addToCart, deleteFromCart, trashAll } from '@/store/reducers/cart';
import { removeAllToggledProducts, toggleProduct } from '@/store/reducers/products';

const { dispatch } = store;

export const moveToCart = (id: number) => {
	const { products } = store.getState();
	dispatch(toggleProduct(id));
	const addedProduct = products.fetchedItems.find((item) => item.id === id);

	if (addedProduct) {
		dispatch(addToCart(addedProduct));
	}
};

// export const toggleFav = (id: number | null) => {
// 	// const { pageFavorites } = store.getState().products;
// 	dispatch(toggleFavorite(Number(id)));
// 	// if (pageFavorites > 1) // && favoriteItems.length % countPerPage === 1
// 	// 	dispatch(changePage({ key: 'pageFavorites', page: pageFavorites - 1 }));
// };

export const removeFromCart = (id: number) => {
	dispatch(toggleProduct(id));
	dispatch(deleteFromCart(id));
};

export const removeAllProducts = () => {
	dispatch(trashAll());
	dispatch(removeAllToggledProducts());
};
