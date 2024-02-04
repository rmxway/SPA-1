import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export type TopBlockProps = { $isFont?: boolean };

export const TopBlockStyle = styled.div<TopBlockProps>`
	${(props) =>
		props?.$isFont &&
		css`
			& h1 {
				font-size: 3rem;
				line-height: 0.9;
				letter-spacing: -2px;
				text-transform: uppercase;
			}
		`}

	background: linear-gradient(170deg,
        ${(props) => props.theme.colors.gray.$8} 30%,
        ${(props) => props.theme.colors.success} 100%);
	margin-top: 0;
	min-height: 80px;
	display: flex;
	align-items: center;
	margin-bottom: 40px;
	padding: ${(props) => (props.$isFont ? '30px 0' : '0 0')};
	color: ${theme.colors.success};

	transition: 0.2s all;

	h1 {
		background: ${theme.gradients.main};
		display: table;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	span {
		font-weight: 300;
	}
`;
