import { Store } from 'redux';

import { VERSION } from '@/services';
import { debounceFunction } from '@/services/helpers';
import { RootStore } from '@/store';
import { fetching } from '@/store/reducers/products';

export const storeName = 'persist:wholeStore';
const isClient = typeof window !== 'undefined';

export const clearStore = () => {
	if (isClient) localStorage.removeItem(storeName);
};

export const checkVersion = (store: RootStore) => {
	if (isClient) {
		const versionName = 'wholeStore-version';
		const currentVersion = localStorage.getItem(versionName);
		if (currentVersion !== VERSION) {
			clearStore();
			localStorage.setItem(versionName, VERSION);
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

export const listener = (store: Store): void => {
	if (isClient) debounceFunction(() => localStorage.setItem(storeName, JSON.stringify(store.getState())));
};
