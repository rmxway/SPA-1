import '@/public/assets/fonts/icofont/icofont.scss';

import { AppProps } from 'next/app';
import { Sofia_Sans } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { Providers } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

const SofiaSans = Sofia_Sans({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
});

export const App = ({ Component, pageProps }: AppProps) => (
	<Providers>
		<ThemeProvider theme={defaultTheme}>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.5" />
				<title>SPA-1</title>
			</Head>
			<GlobalStyles />
			<div className={SofiaSans.className}>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	</Providers>
);

export default App;
