import 'styled-components/macro';

interface Colors {
	primary: string;
	success: string;
    danger: string;
	label: string;
    dark: string;
	gray: {
		$1: string;
		$2: string;
		$3: string;
		$4: string;
		$5: string;
		$6: string;
		$7: string;
		$8: string;
		$9: string;
	};
}

interface Layout {
	containerWidth: string;
    shadow: string;
}

interface Radius {
	borderRadius: string;
}

declare module 'styled-components/macro' {
	export interface DefaultTheme {
		name: string;
		colors: Colors;
		layout: Layout;
		radius: Radius;
	}
}
