import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { IProduct } from '@/services';
import { CartState } from '@/store/reducers/cart';
import { ProductsState } from '@/store/reducers/products';

type stateType = CartState | ProductsState;

const typedCreateSelector = createDraftSafeSelector.withTypes<stateType>();

export const currentItemsMemoized = typedCreateSelector(
	[(state) => state.page, (state) => state.countPerPage, (_, items: IProduct[]) => items],
	(page, countPerPage, items) => {
		if (!Array.isArray(items) || items.length === 0) return [];
		return items.filter((_, idx) => idx >= (page - 1) * countPerPage && idx < countPerPage * page);
	},
);

export const productMemoized = createDraftSafeSelector.withTypes<ProductsState>()(
	[(state) => state.fetchedItems, (_, id: string) => id],
	(fetchedItems, id) => fetchedItems.find((item) => item.id === Number(id)),
);
