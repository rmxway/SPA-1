import { useEffect, useState } from 'react';

import { useAppSelector } from '@/hooks';

import { productsStore, store } from '.';
import { asyncGetAllProducts } from './reducers/asyncGetAllProducts';

type ReturnTypeHook = { isLocal: boolean };

function* runOnce() {
	yield store.dispatch(asyncGetAllProducts({}));
}
const generator = runOnce();

export const useAllStore = (): ReturnTypeHook => {
	const { fetchedItems } = useAppSelector(productsStore);
	const isEmpty = !!fetchedItems.length;
	const [isLocal, setLocal] = useState<boolean>(isEmpty);

	useEffect(() => {
		if (!isLocal) generator.next();
	}, [isLocal]);

	useEffect(() => setLocal(isEmpty), [isEmpty]);

	return { isLocal };
};

export default useAllStore;
