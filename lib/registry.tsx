'use client';

import '@/public/assets/fonts/icofont/icofont.scss';

import { usePathname, useServerInsertedHTML } from 'next/navigation';
import React, { ReactNode, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { TopBlock } from '@/components/ui';
import { navbarItems } from '@/mock/navbar';
import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

type TemplateProps = {
	title?: string;
	isMain?: boolean;
	children?: ReactNode | undefined;
};

const Template = ({ title = 'Test', isMain, children }: TemplateProps) => (
	<ReduxProvider>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Navbar />
			<TopBlock $isFont={isMain}>
				{isMain ? (
					<>
						Green Shop <span>| Brand</span>
					</>
				) : (
					title
				)}
			</TopBlock>
			{children}
		</ThemeProvider>
	</ReduxProvider>
);

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	const [sheet] = useState(() => new ServerStyleSheet());
	const pathname = usePathname();

	const title = navbarItems.find((item) => item.url === pathname)?.title;

	const propsTemplate: TemplateProps = { title, isMain: pathname === '/', children };

	try {
		useServerInsertedHTML(() => {
			const styles = sheet.getStyleElement();
			sheet.instance.clearTag();

			// eslint-disable-next-line react/jsx-no-useless-fragment
			return <>{styles}</>;
		});

		if (typeof window !== 'undefined') return <Template {...propsTemplate} />;

		return (
			<StyleSheetManager sheet={sheet.instance}>
				<Template {...propsTemplate} />
			</StyleSheetManager>
		);
	} catch (error) {
		throw new Error((error as Error).message);
	} finally {
		sheet.instance.clearTag();
	}
}

export default StyledComponentsRegistry;
