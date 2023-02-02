import { IProduct } from '@/interfaces';
import { store } from '@/store';
import { fetching, getProducts, setError } from '@/store/reducers/products';

const { dispatch } = store;

const fetchProducts = async (count: number) => {
	dispatch(setError(''));
	try {
		dispatch(fetching(true));
		const result = await fetch(`https://fakestoreapi.com/products?limit=${count}`);
		const json: IProduct[] = await result.json();
		json.forEach((item) => {
			item.checked = false;
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
