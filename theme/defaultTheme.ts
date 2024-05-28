import { darken, desaturate } from 'polished';
import { DefaultTheme } from 'styled-components';

import { Colors, Gradients } from '@/@types/styled';

const primary = '#fdd01a';
const success = '#00ff9d';
const danger = '#e54f5e';
const label = '#5c323e';

const colors: Colors = {
	primary,
	success,
	danger,
	label,
	dark: desaturate(0.9, darken(0.2, success)),
	gray: {
		$1: '#f3f3f3',
		$2: '#e3e3e3',
		$3: '#cdcdcd',
		$4: '#bebebe',
		$5: '#a5a5a5',
		$6: '#747474',
		$7: '#595959',
		$8: '#434343',
		$9: '#222222',
	},
};

const gradients: Gradients = {
	main: `linear-gradient(150deg, #e8ffb3 0%, ${success} 60%)`,
	dark: `linear-gradient(150deg, ${success} 0%, ${label} 60%)`,
    softDark: `linear-gradient(150deg, ${success} 0%, #fff 40%)`,
};

export const defaultTheme: DefaultTheme = {
	name: 'default',
	colors,
	gradients,
	layout: {
		containerWidth: '1024px',
		shadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
	},
	radius: {
		borderRadius: '8px',
	},
};

export default defaultTheme;
