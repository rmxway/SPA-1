import { Store } from 'redux';

import { debounceFunction } from '@/services/helpers';

export const storeName = 'gs-store';
const isClient = typeof window !== 'undefined';

export const localState = () => {
	const localStore: string | null = isClient ? localStorage.getItem(storeName) : '';
	return isClient && localStore ? JSON.parse(String(localStore)) : {};
};

export const listener = (store: Store): void => {
	if (isClient) debounceFunction(() => localStorage.setItem(storeName, JSON.stringify(store.getState())));
};
