import { createAction } from '@reduxjs/toolkit';

import { VERSION } from '@/services';
import { fetching } from '@/store/reducers/products';
import { RootStore } from '@/store/types';

export const storeName = 'persist:wholeStore';
const versionName = 'wholeStore-version';
const isClient = typeof window !== 'undefined';

const clearStorageAction = createAction('store/clear');

export const clearStore = () => {
	if (isClient) localStorage.removeItem(storeName);
};

export const checkVersion = (store: RootStore) => {
	if (isClient) {
		const currentVersion = localStorage.getItem(versionName);

		if (currentVersion !== VERSION) {
			localStorage.setItem(versionName, VERSION);
			store.dispatch(clearStorageAction());
		} else {
			const unsubscribe = store.subscribe(() => {
				if (store.getState().products.total >= 1) {
					unsubscribe();
					store.dispatch(fetching(false));
				}
			});
		}
	}
};
