'use client';

import { memo, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { TopBlock } from '@/components/ui';
import { checkVersion } from '@/services/localStore';
import { store } from '@/store';
import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

export type TemplateProps = {
	children?: ReactNode | undefined;
};

checkVersion(store);

export const Template = memo(({ children }: TemplateProps) => (
	<ReduxProvider>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Navbar />
			<TopBlock />
			{children}
		</ThemeProvider>
	</ReduxProvider>
));

export default Template;
