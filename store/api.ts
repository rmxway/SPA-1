import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '@/services/interfaces';

interface Data {
	products: IProduct[];
}

export interface ResponseProducts {
	data: IProduct[];
	categories: string[];
}

export const api = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/',
	}),
	tagTypes: ['Products', 'Product'],
	endpoints: (builder) => ({
		getProducts: builder.query<ResponseProducts, void | null>({
			query: () => ({
				url: 'products',
				params: {
					limit: 100,
				},
			}),
			providesTags: ['Products'],
			transformResponse: (data: Data): ResponseProducts => {
				const categories = [...new Set(data.products.map((item) => item.category || ''))];
				categories.unshift('all');

				return {
					data: data.products,
					categories,
				};
			},
		}),
		getProduct: builder.query<IProduct, string>({
			query: (id) => `products/${id}`,
			providesTags: ['Product'],
		}),
	}),
});

export const { useGetProductsQuery, useGetProductQuery } = api;
