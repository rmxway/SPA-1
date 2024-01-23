import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { TopBlock } from '@/components/ui';
import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

export type TemplateProps = {
	title?: string;
	isMain?: boolean;
	children?: ReactNode | undefined;
};

export const Template = ({ title = 'Test', isMain, children }: TemplateProps) => (
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

export default Template;
