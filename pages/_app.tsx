import '@/public/assets/fonts/icofont/icofont.scss';

import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { wrapper } from '@/store';
import { Providers } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

const Font = Roboto({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	preload: true,
});

export const App = ({ Component, ...pageProps }: AppProps) => {
	const { props, store } = wrapper.useWrappedStore(pageProps);
	return (
		<ThemeProvider theme={defaultTheme}>
			<Providers store={store}>
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.5" />
					<title>SPA-1 on NextJS</title>
				</Head>
				<GlobalStyles />
				<div className={Font.className}>
					<Navbar />
					<Component {...props} />
				</div>
			</Providers>
		</ThemeProvider>
	);
};

export default App;
