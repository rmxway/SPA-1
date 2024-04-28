import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { IProduct } from '@/services';
import { CartState, ProductsState } from '@/services/interfaces';

type stateType = CartState | ProductsState;

const typedCommonCreateSelector = createDraftSafeSelector.withTypes<stateType>();
const typedProductsCreateSelector = createDraftSafeSelector.withTypes<ProductsState>();

export const currentItemsMemoized = typedCommonCreateSelector(
	[(state) => state.page, (state) => state.countPerPage, (_, items: IProduct[]) => items],
	(page, countPerPage, items) => {
		if (!Array.isArray(items) || items.length === 0) return [];
		return items.filter((_, idx) => idx >= (page - 1) * countPerPage && idx < countPerPage * page);
	},
);

export const productMemoized = typedProductsCreateSelector(
	[(state) => state.fetchedItems, (_, id: string) => id],
	(fetchedItems, id) => fetchedItems.find((item) => item.id === Number(id)),
);

export const favoritesItemsMemoized = typedProductsCreateSelector([(state) => state.fetchedItems], (fetchedItems) =>
	fetchedItems.filter((item) => item.favorite),
);

export const productsSelectorMemoized = typedProductsCreateSelector(
	[(state) => state.fetchedItems, (state) => state.fetching, (state) => state.error],
	(fetchedItems, fetching, error) => ({ fetchedItems, fetching, error }),
);
