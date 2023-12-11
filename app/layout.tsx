'use client';

import '@/public/assets/fonts/icofont/icofont.scss';

import { Roboto } from 'next/font/google';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { store } from '@/store';
import { defaultTheme, GlobalStyles } from '@/theme';

const Font = Roboto({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Provider store={store}>
				<GlobalStyles />
				<html lang="en">
					<body className={Font.className}>
						<Navbar />
						{children}
					</body>
				</html>
			</Provider>
		</ThemeProvider>
	);
}
