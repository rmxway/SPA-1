import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '.';

export const Providers = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>;

export default Providers;
