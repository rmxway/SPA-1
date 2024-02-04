import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const WrapperFavorite = styled.div<{ active?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	cursor: pointer;
	z-index: 2;
	opacity: 0.5;
	transition: 0.2s;

	.icofont {
		font-size: 1.3rem;
	}

	${(props) =>
		props?.active &&
		css`
			color: ${theme.colors.danger};
			opacity: 1;
		`}

	&:active {
		transform: scale(1.2);
	}

	&:hover {
		opacity: 1;
		color: ${theme.colors.danger};
	}
`;

export default WrapperFavorite;
