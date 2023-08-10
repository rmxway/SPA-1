import { Store } from 'redux';

export const storeName = 'gs-store';
const isClient = typeof window !== 'undefined';

export const persistState = () => {
	const localStore: string | null = isClient ? localStorage.getItem(storeName) : '';
	return isClient && localStore ? JSON.parse(String(localStore)) : {};
};

export const listener = (store: Store): void => {
	if (isClient) localStorage.setItem(storeName, JSON.stringify(store.getState()));
};
