import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { fetching, getProducts, setError } from '@/store/reducers/products';

const { dispatch } = store;

const fetchProducts = async (count?: number | null, product?: number) => {
	dispatch(setError(''));
	try {
		dispatch(fetching(true));
		const paramCount = count ? `?limit=${count}` : '';
		const paramProduct = product ? `/${product}` : '';
		const path = `https://fakestoreapi.com/products${paramProduct}${paramCount}`;
		const result = await fetch(path);
		const json: IProduct[] = count ? await result.json() : [await result.json()];

		json.forEach((item) => {
			item.checked = false;
			item.imgFetch = true;
		});
		dispatch(getProducts(json));
	} catch (e) {
		dispatch(setError((e as Error).message));
	} finally {
		dispatch(fetching(false));
	}
};

export { fetchProducts };
export default fetchProducts;
