import styled, { css } from 'styled-components';

export const MainHeader = styled.div<{ $isFont?: boolean }>`
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

export default MainHeader;
