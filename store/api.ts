import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { protocol } from '@/services';
import { getHost } from '@/services/domainData';
import { IProduct } from '@/services/interfaces';

export interface ResponseProducts {
	data: IProduct[];
	categories: string[];
}

export const api = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${protocol}://${getHost}/api/`,
	}),
	tagTypes: ['Products', 'Product'],
	endpoints: (builder) => ({
		getProducts: builder.query<ResponseProducts, void | null>({
			query: () => 'products',
			providesTags: ['Products'],
			transformResponse: (response: IProduct[]): ResponseProducts => {
				const categories = [...new Set(response.map((item) => item.category || ''))];
				categories.unshift('all');

				return {
					data: response,
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
