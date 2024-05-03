import { rgba } from 'polished';
import { css } from 'styled-components';

export const hideGradientMixin = (bg = '#fff', position = 'right') => css`
	content: '';
	position: absolute;
	top: 0;
	z-index: 1;

	background: linear-gradient(to ${position}, ${rgba(bg, 0)} 60%, ${bg} 95%);
`;

export default hideGradientMixin;
