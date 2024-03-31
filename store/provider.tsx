'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { makeStore, RootStore } from '@/store';

const persistor = persistStore(makeStore());

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
	const store = useRef<RootStore>();

	if (!store.current) {
		store.current = makeStore();
	}
	return (
		<PersistGate persistor={persistor}>
			<Provider store={store.current}>{children}</Provider>
		</PersistGate>
	);
};

export default ReduxProvider;
