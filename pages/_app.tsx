import '@/theme/styles/includes.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { Providers } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

export const App = ({ Component, pageProps }: AppProps) => (
	<Providers>
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
	</Providers>
);

export default App;
