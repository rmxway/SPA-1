import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/services/interfaces';

export const api = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/api/',
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], void>({
			query: () => 'products',
		}),
		getProduct: builder.query<IProduct, string>({
			query: (id) => `products/${id}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductQuery } = api;
