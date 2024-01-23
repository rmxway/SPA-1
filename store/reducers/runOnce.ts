import { IProduct } from '@/services';

import { store } from '..';
import { addProducts } from './products';

const runOnce = () => {
	let fetched = true;

	return (products: IProduct[]) => {
		if (fetched) store.dispatch(addProducts(products || []));
		fetched = false;
	};
};

export const placeProductsToRedux = runOnce();
