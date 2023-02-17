import { store } from '@/store';
import { fetching, setError, setProducts } from '@/store/reducers/products';

const { dispatch } = store;

interface FetchParams {
	count?: number;
	product?: number;
	page?: number;
}

const fetchProducts = async ({ count = 8, product, page = 1 }: FetchParams) => {
	dispatch(setError(''));

	dispatch(fetching(true));
	const controller = new AbortController();
	const { signal } = controller;
	const timeout = setTimeout(() => controller.abort(), 7000);
	const paramCount = count ? `?limit=${count}` : '';
	const paramProduct = product ? `/${product}` : '';
	const paramPage = count && page > 1 ? `&skip=${(page - 1) * count}` : '';
	const path = `https://dummyjson.com/products${paramProduct}${paramCount}${paramPage}`;

	await fetch(path, { signal })
		.then((res) => res)
		.then((data) => data.json())
		.then((json) => {
			const { products, total } = json;
			clearTimeout(timeout);

			dispatch(setProducts({ products, total, page, count }));
		})
		.catch((err) => {
			dispatch(setError((err as Error).message));
		})
		.finally(() => dispatch(fetching(false)));
};

export { fetchProducts };
export default fetchProducts;
