import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductQuery } from '@/store/api';
import { useMemo, useState } from 'react';

export const useGetProduct = (id: string) => {
	let product: IProduct | undefined;

	const [skip, setSkip] = useState(true);
	useGetProductQuery(id, { skip });

	const { fetchedItems, error, fetching } = useAppSelector(productsStore);
	product = fetchedItems.find((item) => item.id === Number(id));

	useMemo(() => {
		setSkip(() => !!product);
	}, [product]);

	return { fetching, error, product };
};
