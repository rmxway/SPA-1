'use client';

import { useLayoutEffect } from 'react';

import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { addOneProduct } from '@/store/reducers/products';

export const useGetProduct = (serverProduct: IProduct) => {
	const { fetchedItems, error, fetching } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		if (fetchedItems.length === 0) {
			dispatch(addOneProduct(serverProduct));
		}
	}, [dispatch, fetchedItems.length, serverProduct]);

	return {
		fetching,
		error,
		product: fetchedItems.find((item) => item.id === Number(serverProduct.id)) || serverProduct,
	};
};

export default useGetProduct;
