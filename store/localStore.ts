import { Store } from 'redux';

import { VERSION } from '@/services';
import { debounceFunction } from '@/services/helpers';

export const storeName = 'persist:wholeStore';
const isClient = typeof window !== 'undefined';

export const clearStore = () => {
	if (isClient) localStorage.removeItem(storeName);
};

export const checkVersion = () => {
	if (isClient) {
		const versionName = 'wholeStore-version';
		const currentVersion = localStorage.getItem(versionName);
		if (currentVersion !== VERSION) {
			clearStore();
			localStorage.setItem(versionName, VERSION);
		}
	}
};

export const listener = (store: Store): void => {
	if (isClient) debounceFunction(() => localStorage.setItem(storeName, JSON.stringify(store.getState())));
};
