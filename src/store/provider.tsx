import { FC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

// import { PersistGate } from 'redux-persist/lib/integration/react';

interface ProvidersProps {
	store: Store;
	children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ store, children }) => <Provider store={store}>{children}</Provider>;

export default Providers;
