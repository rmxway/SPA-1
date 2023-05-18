import { AsyncGetAllProductsProps, convertParamsToString, Url } from './asyncGetAllProducts';

export const simpleAsyncGetProducts = async ({ url, params = {}, page = 1, count = 12 }: AsyncGetAllProductsProps) => {
	const newUrl: Url = url || 'http://localhost:3000/api/products';
	const paramsString = typeof params === 'string' ? params : convertParamsToString(params);

	const path = `${newUrl}${paramsString}`;

	try {
		const response = await fetch(path);

		if (!response.ok) {
			throw new Error(`${response.statusText}. Your link looks like: ${response.url}`);
		}

		const products = await response.json();

		return { products, total: products.length, page, count };
	} catch (e) {
		return (e as Error).message;
	}
};

export default simpleAsyncGetProducts;
