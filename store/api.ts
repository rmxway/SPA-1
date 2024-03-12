import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { protocol } from '@/services';
import { getHost } from '@/services/domainData';
import { IProduct } from '@/services/interfaces';

export const api = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${protocol}://${getHost}/api/`,
	}),
	tagTypes: ['Products', 'Product'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], void | null>({
			query: () => 'products',
			providesTags: ['Products'],
		}),
		getProduct: builder.query<IProduct, string>({
			query: (id) => `products/${id}`,
			providesTags: ['Product'],
		}),
	}),
});

export const { useGetProductsQuery, useGetProductQuery } = api;
