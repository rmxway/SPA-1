import { ThemeProvider } from 'styled-components';

import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';

import { TemplateProps } from './template';

export const JestTemplate = ({ children }: TemplateProps) => (
	<ReduxProvider>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	</ReduxProvider>
);

export default JestTemplate;
