'use client';

import '@/public/assets/fonts/icofont/icofont.scss';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { store } from '@/store';
import { defaultTheme, GlobalStyles } from '@/theme';

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <style>{styles}</style>;
	});

	if (typeof window !== 'undefined')
		return (
			<ThemeProvider theme={defaultTheme}>
				<Provider store={store}>
					<GlobalStyles />
					<Navbar />
					{children}
				</Provider>
			</ThemeProvider>
		);

	return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}

export default StyledComponentsRegistry;
