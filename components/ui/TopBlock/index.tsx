import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '@/components/Layout';

type TopBlockProps = { $isFont?: boolean };

const TopBlockStyle = styled.div<TopBlockProps>`
	${(props) =>
		props?.$isFont
			? css`
					font-size: 3rem;
					line-height: 0.9;
					letter-spacing: -3px;
					text-transform: uppercase;
					font-weight: 900;
			  `
			: ''}

	background-color: ${(props) => props.theme.colors.gray.$8};
	margin-top: 0;
	margin-bottom: 30px;
	padding: ${(props) => (props.$isFont ? '75px 0' : '10px 0')};
	color: ${(props) => props.theme.colors.success};

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
