import { rgba } from 'polished';
import { css } from 'styled-components';

export const hideGradientMixin = (bg = '#ffffff', position = 'right') => css`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;

		background: linear-gradient(to ${position}, ${rgba(bg, 0)} 60%, ${bg} 95%);
	}
`;

export default hideGradientMixin;
