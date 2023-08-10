import { createAsyncThunk } from '@reduxjs/toolkit';

export interface Params {
	limit?: number;
}

export type Url =
	| 'https://dummyjson.com/products'
	| 'http://localhost:3000/api/products'
	| 'http://localhost:3001/products';

export interface AsyncGetAllProductsProps {
	url?: Url;
	params?: Params | string;
	page?: number;
	count?: number;
}

export const convertParamsToString = (params: Params) => {
	const str = ['?'];

	(Object.keys(params) as Array<keyof typeof params>).reduce((acc, cur, idx, arr) => {
		const $and = idx + 1 < arr.length ? '&' : '';
		const query = `${cur}=${params[cur]}${$and}`;
		str.push(query);
		return acc;
	}, [] as (typeof params)[keyof typeof params][]);

	return str.join('');
};

export const asyncGetAllProducts = createAsyncThunk(
	'products/asyncGetAllProducts',
	async ({ url, params = {}, page = 1, count = 12 }: AsyncGetAllProductsProps, thunkApi) => {
		const { rejectWithValue, signal } = thunkApi;

		const newUrl: Url = url || 'http://localhost:3000/api/products';
		const paramsString = typeof params === 'string' ? params : convertParamsToString(params);

		const path = `${newUrl}${paramsString}`;

		try {
			const response = await fetch(path, { signal });

			if (!response.ok) {
				throw new Error(`${response.statusText}. Your link looks like: ${response.url}`);
			}

			const products = await response.json();

			return {
				products: products.state,
				total: products.state.length,
				page,
				count,
			};
		} catch (e) {
			return rejectWithValue((e as Error).message);
		}
	}
);

export default asyncGetAllProducts;
