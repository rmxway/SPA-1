import { Store } from 'redux';

export const storeName = 'gs-store';

const localStore: string | null = localStorage.getItem(storeName);

export const persistState = localStorage.getItem(storeName) ? JSON.parse(String(localStore)) : {};

export const listener = (store: Store): void => {
	localStorage.setItem(storeName, JSON.stringify(store.getState()));
};
