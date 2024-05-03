import styled from 'styled-components';

export const WrapperFinal = styled.div`
	position: relative;
	display: flex;
	gap: 30px;
	flex-grow: 1;
	top: -25px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	@keyframes ding {
		0% {
			transform: scale(1);
		}
		15% {
			transform: scale(1.1);
		}
		30% {
			transform: scale(1);
		}
		45% {
			transform: scale(1.2);
		}
		80% {
			transform: scale(1);
		}
		100% {
			transform: scale(1);
		}
	}

	i {
		color: ${({ theme }) => theme.colors.danger};
		animation: ding 1.5s linear;
		animation-direction: normal;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	p {
		font-size: 1.2rem;
	}
`;
