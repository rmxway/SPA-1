import styled from 'styled-components';

import { fadeIn, media } from '@/theme';

export const ImageForest = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;

	img {
		object-fit: cover;
		opacity: 0;

		${fadeIn}
		animation-fill-mode: forwards;
	}

	&:after {
		position: absolute;
		content: '';
		background-image: ${({ theme }) => theme.gradients.main};
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
	}
`;

export const ImageLogos = styled.div`
	position: relative;
	text-align: center;

	&:before {
		position: absolute;
		content: '';
		background-color: #d6ffdd;
		top: 10px;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 30%;
		transform: translate3d(0, 0, 0);
		filter: blur(60px);
	}

	img {
		mix-blend-mode: multiply;
		max-width: 100%;
		height: auto;
		margin: 30px 0;
		object-position: left;
		object-fit: contain;
	}

	${media.lessThan('md')`
        &:before {
            filter: blur(6svw);
        }

        img {
            margin: 20px 0 10px;
        }
    `}
`;
