import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { searchProduct, sortProduct } from '@/store/reducers/products';

const { dispatch } = store;

export const search = (searchText: string) => {
	const { products } = store.getState();
	dispatch(searchProduct(searchText));
	dispatch(sortProduct({ sort: products.sort.name as keyof IProduct, toggle: products.sort.toggle }));
};

export default search;
