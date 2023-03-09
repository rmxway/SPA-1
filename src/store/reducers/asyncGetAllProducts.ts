import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchParams {
	count?: number;
	product?: number;
	page?: number;
}

export const asyncGetAllProducts = createAsyncThunk(
	'products/asyncGetAllProducts',
	async ({ count = 12, page = 1 }: FetchParams, thunkApi) => {
		const { rejectWithValue, signal } = thunkApi;
		const path = `https://dummyjson.com/products?limit=100`; // http://localhost:3001/products

		try {
			const response = await fetch(path, { signal });

			if (!response.ok) {
				throw new Error('Wrong url');
			}

			const data = await response.json();

			return { products: data, total: data.length, page, count };
		} catch (e) {
			return rejectWithValue((e as Error).message);
		}
	}
);

export default asyncGetAllProducts;