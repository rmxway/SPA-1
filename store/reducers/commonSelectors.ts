import { createSelector } from '@reduxjs/toolkit';

import { IProduct } from '@/services';
import { CartState } from '@/store/reducers/cart';
import { ProductsState } from '@/store/reducers/products';

type stateType = CartState | ProductsState;

export const currentItemsMemoized = createSelector(
	[
		(state: stateType) => state.page,
		(state: stateType) => state.countPerPage,
		(state: stateType, items: IProduct[]) => items,
	],
	(page, countPerPage, items) => {
		if (!Array.isArray(items) || items.length === 0) return [];
		return items.filter((_, idx) => idx >= (page - 1) * countPerPage && idx < countPerPage * page);
	},
);
