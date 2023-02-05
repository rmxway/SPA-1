import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { searchProduct, sortProducts } from '@/store/reducers/products';

const { dispatch } = store;

export const search = (searchText: string) => {
	const { products } = store.getState();
	dispatch(searchProduct(searchText));
	dispatch(sortProducts({ sort: products.sort.name as keyof IProduct, toggle: products.sort.toggle }));
};

export default search;
