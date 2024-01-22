'use client';

import '@/public/assets/fonts/icofont/icofont.scss';

import { useServerInsertedHTML } from 'next/navigation';
import React, { PropsWithChildren, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { TopBlock } from '@/components/ui';
// import { navbarItems } from '@/mock/navbar';
import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

const Template = ({ children, title = 'Test' }: { title?: string } & PropsWithChildren) => (
	<ReduxProvider>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Navbar />
			<TopBlock>{title}</TopBlock>
			{children}
		</ThemeProvider>
	</ReduxProvider>
);

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	const [sheet] = useState(() => new ServerStyleSheet());

	try {
		useServerInsertedHTML(() => {
			const styles = sheet.getStyleElement();
			sheet.instance.clearTag();

			// eslint-disable-next-line react/jsx-no-useless-fragment
			return <>{styles}</>;
		});

		if (typeof window !== 'undefined') return <Template>{children}</Template>;

		return (
			<StyleSheetManager sheet={sheet.instance}>
				<Template>{children}</Template>
			</StyleSheetManager>
		);
	} catch (error) {
		throw new Error((error as Error).message);
	} finally {
		sheet.instance.clearTag();
	}
}

export default StyledComponentsRegistry;
