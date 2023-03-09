// import { createAsyncThunk } from '@reduxjs/toolkit';

// import { IProduct } from '@/interfaces';

// interface FetchParams {
// 	count?: number;
// 	product?: number;
// 	page?: number;
// }

// interface JSONResponse {
// 	products: IProduct[];
// 	total: number;
// }

// export const asyncGetProducts = createAsyncThunk(
// 	'products/asyncGetProducts',
// 	async ({ count = 8, product, page = 1 }: FetchParams, thunkApi) => {
// 		const { rejectWithValue, signal } = thunkApi;

// 		const paramCount = count ? `?limit=${count}` : '';
// 		const paramProduct = product ? `/${product}` : '';
// 		const paramPage = count && page > 1 ? `&skip=${(page - 1) * count}` : '';
// 		const path = `https://dummyjson.com/products${paramProduct}${paramCount}${paramPage}`;

// 		try {
// 			const response = await fetch(path, { signal });

// 			if (!response.ok) {
// 				throw new Error('Wrong url');
// 			}

// 			const data = await response.json();
// 			const json = await data;
// 			const { products, total }: JSONResponse = json;

// 			return { products, total, page, count };
// 		} catch (e) {
// 			return rejectWithValue((e as Error).message);
// 		}
// 	}
// );

// export default asyncGetProducts;
