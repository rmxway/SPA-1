import Image from 'next/image';
import styled from 'styled-components';

import { fadeIn } from '@/theme';

export const ImageForest = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	background-color: #cad7b2;
	opacity: 0;

	${fadeIn}
	animation-fill-mode: forwards;
`;

export const ImageLogos = styled(Image)`
	mix-blend-mode: multiply;
	max-width: 100%;
	margin: 30px 0;
	object-position: left;
	object-fit: contain;
`;
