import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ active?: boolean }>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	cursor: pointer;
	top: 0;
	right: 0;
	z-index: 1;
	opacity: 0.5;
	transition: 0.2s;

	${(props) =>
		props?.active &&
		css`
			color: ${props.theme.colors.danger};
			opacity: 1;
		`}

	&:active {
		transform: scale(1.2);
	}

	&:hover {
		opacity: 1;
		color: ${(props) => props.theme.colors.danger};
	}
`;

export default Wrapper;
