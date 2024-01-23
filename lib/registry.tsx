'use client';

import '@/public/assets/fonts/icofont/icofont.scss';

import { usePathname, useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { navbarItems } from '@/mock/navbar';

import { Template, TemplateProps } from './template';

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	const [sheet] = useState(() => new ServerStyleSheet());
	const pathname = usePathname();

	const getTitle = () => {
		if (pathname.includes('/product/')) return 'Product';
		return navbarItems.find((item) => item.url === pathname)?.title;
	};

	const propsTemplate: TemplateProps = { title: getTitle(), isMain: pathname === '/', children };

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
