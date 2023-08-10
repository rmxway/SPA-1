import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
	name: 'default',
	colors: {
		primary: '#fdd01a',
		success: '#7bc03b',
		danger: '#e54f5e',
		label: '#5c323e',
		dark: '#222',
		gray: {
			$1: '#ddd',
			$2: '#ececec',
			$3: '#cdcdcd',
			$4: '#bebebe',
			$5: '#a5a5a5',
			$6: '#747474',
			$7: '#595959',
			$8: '#434343',
			$9: '#222222',
		},
	},
	layout: {
		containerWidth: '1024px',
		shadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
	},
	radius: {
		borderRadius: '8px',
	},
};

export { defaultTheme };
export default defaultTheme;
