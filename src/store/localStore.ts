import { Store } from 'redux';

export const storeName = 'gs-store';
const isClient = typeof window !== 'undefined';

const localStore: string | null = isClient ? window.localStorage.getItem(storeName) : null;
export const persistState = () => {
	if (isClient) {
		return window.localStorage.getItem(storeName) ? JSON.parse(String(localStore)) : {};
	}
	return {};
};

export const listener = (store: Store): void => {
	if (isClient) localStorage.setItem(storeName, JSON.stringify(store.getState()));
};
