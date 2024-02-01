import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';

type TopBlockProps = { $isFont?: boolean };

const TopBlockStyle = styled.div<TopBlockProps>`
	${(props) =>
		props?.$isFont &&
		css`
			& h1 {
				font-size: 3rem;
				line-height: 0.9;
				letter-spacing: -3px;
				text-transform: uppercase;
				font-weight: 900;
			}
		`}

	background: linear-gradient(170deg,
        ${(props) => props.theme.colors.gray.$8} 30%,
        ${(props) => props.theme.colors.success} 100%);
	margin-top: 0;
	margin-bottom: 40px;
	padding: ${(props) => (props.$isFont ? '50px 0' : '1px 0')};
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

type BlockStyle = TopBlockProps & PropsWithChildren;

export const TopBlock = ({ children, ...props }: BlockStyle) => (
	<TopBlockStyle {...props}>
		<Container>
			<h1>{children}</h1>
		</Container>
	</TopBlockStyle>
);

export default TopBlock;
