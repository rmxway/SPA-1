import { Store } from 'redux';

export const storeName = 'gs-store';

let persistState: {};
let listener: (store: Store) => void;

if (typeof window !== 'undefined') {
	const localStore: string | null = window.localStorage.getItem(storeName);
	persistState = window.localStorage.getItem(storeName) ? JSON.parse(String(localStore)) : {};
	listener = (store: Store): void => {
		localStorage.setItem(storeName, JSON.stringify(store.getState()));
	};
}

export { persistState, listener };
