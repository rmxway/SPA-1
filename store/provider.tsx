'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
	<PersistGate persistor={persistor}>
		<Provider store={store}>{children}</Provider>
	</PersistGate>
);

export default ReduxProvider;
