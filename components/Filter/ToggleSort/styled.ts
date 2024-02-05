import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

interface ToggleTypes {
	toggle?: boolean;
}

export const Toggle = styled.button<ToggleTypes>`
	display: block;
	border: none;
	background: none;
	position: relative;
	color: ${theme.colors.gray.$7};
	margin-right: 20px;
	padding-right: 20px;
	cursor: pointer;

	&:hover {
		color: ${theme.colors.gray.$9};
	}

	input {
		display: none;
	}

	label {
		pointer-events: none;
	}

	input:checked + label {
		color: ${theme.colors.danger};

		i {
			display: block;
		}
	}

	.icofont {
		position: absolute;
		right: 0;
		top: 0;
		width: 20px;
		height: 20px;
		display: none;
		line-height: 1.3;
		transition: 0.2s all;
		${(props) => (props?.toggle ? 'transform: scale(1, -1);' : '')}
	}
`;

export default Toggle;
