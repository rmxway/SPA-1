import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div<{ background?: boolean }>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100px;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
	pointer-events: none;
	color: ${(props) => props.theme.colors.gray.$7};
    mix-blend-mode: multiply;
`;

export const StyledLoader = styled.div`
	@keyframes rotateLoading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(23040deg);
		}
	}

	@keyframes changeColors {
		0% {
			background: ${(props) => props.theme.colors.primary};
		}
		33% {
			background: ${(props) => props.theme.colors.primary};
		}
		66% {
			background: ${(props) => darken(0.05, props.theme.colors.primary)};
		}
		100% {
			background: ${(props) => props.theme.colors.primary};
		}
	}
	animation-name: rotateLoading;
	animation-duration: 5s;
	animation-direction: forwards;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
    mix-blend-mode: multiply;

	&:before {
		content: '';
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 100%;
		margin: 0;
		background: ${(props) => props.theme.colors.primary};
		mask-image: linear-gradient(to left, transparent 50%, black 100%);
		animation: changeColors 3s forwards infinite linear;
	}

	&::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 100%;
		background-color: #fff;
	}
`;
