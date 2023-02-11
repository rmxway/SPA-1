import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { fetching, getProducts, setError } from '@/store/reducers/products';

const { dispatch } = store;

const fetchProducts = async (count?: number | null, product?: number) => {
	dispatch(setError(''));

	dispatch(fetching(true));
	const paramCount = count ? `?limit=${count}` : '';
	const paramProduct = product ? `/${product}` : '';
	// const path = `https://fakestoreapi.com/products${paramProduct}${paramCount}`;
	const path = `https://dummyjson.com/products${paramProduct}${paramCount}`;

	await fetch(path)
		.then((prom) => {
			prom.json().then((res) => {
				const { products } = res;

				products.forEach((item: IProduct) => {
					// item.checked = false;
					item.imgFetch = true;
				});
				dispatch(getProducts(products));
			});
		})
		.catch((err) => {
			dispatch(setError((err as Error).message));
		})
		.finally(() => dispatch(fetching(false)));
};

export { fetchProducts };
export default fetchProducts;
