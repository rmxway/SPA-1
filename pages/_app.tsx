import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { store } from '@/store';
import { defaultTheme, GlobalStyles } from '@/theme';
import Head from 'next/head';
import '@/theme/styles/includes.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={defaultTheme}>
					<Head>
						<meta charSet="UTF-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.5" />
						<title>SPA-1</title>
					</Head>
					<GlobalStyles />
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	);
}
