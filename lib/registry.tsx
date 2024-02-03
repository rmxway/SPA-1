'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { Template } from './template';

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
