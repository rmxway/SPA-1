import { IProduct } from '@/interfaces';
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
	const paramCount = count ? `?limit=${count}` : '';
	const paramProduct = product ? `/${product}` : '';
	const paramPage = count && page > 1 ? `&skip=${(page - 1) * count}` : '';
	// const path = `https://fakestoreapi.com/products${paramProduct}${paramCount}`;
	const path = `https://dummyjson.com/products${paramProduct}${paramCount}${paramPage}`;

	await fetch(path)
		.then((res) => res)
		.then((data) => data.json())
		.then((json) => {
			const { products, total } = json;

			products.forEach((item: IProduct) => {
				item.imgFetch = true;
			});
			dispatch(setProducts({ products, total, page, count }));
		})
		.catch((err) => {
			dispatch(setError((err as Error).message));
		})
		.finally(() => dispatch(fetching(false)));
};

export { fetchProducts };
export default fetchProducts;
