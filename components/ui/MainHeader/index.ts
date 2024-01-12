import styled, { css } from 'styled-components';

const MainHeader = styled.div<{ $isFont?: boolean }>`
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

	background-color: ${(props) => props.theme.colors.gray.$2};
	margin-top: 0;
	margin-bottom: 30px;
	padding: ${(props) => (props.$isFont ? '40px 0' : '10px 0')};
	color: ${(props) => props.theme.colors.gray.$7};

	span {
		font-weight: 300;
	}
`;

export { MainHeader };
export default MainHeader;
