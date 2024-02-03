import Image from 'next/image';
import styled from 'styled-components';

import { LayerBlock } from '@/components/Layout';
import { media } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;

	${media.greaterThan('md')`
        flex-wrap: nowrap;
    `}

	.swiper {
		margin-bottom: 20px;
		border-radius: 10px;
		border: 1px solid #ddd;

		.swiper-slide {
			height: auto;
			height: 25vw;
			min-height: 450px;
			max-height: 600px;
		}
	}

	img {
		height: 100%;
		width: 100%;
		display: block;
		margin: 0;
		object-position: center;
		object-fit: cover;

		${media.greaterThan('md')`
            /* width: 100%;
            height: 350px;
            margin-bottom: 0; */
        `}
	}
`;

export const Title = styled.h1`
	text-transform: uppercase;
	line-height: 1.2;
	margin: 0;
	margin-bottom: 10px;
`;

export const ProductImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top center;
`;

export const Info = styled.div`
	flex-grow: 1;
	min-width: 1px;

	span {
		line-height: 1.5;
		font-size: 20px;

		p {
			margin-bottom: 20px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

export const SideBlock = styled.div`
	position: relative;

	${LayerBlock} {
		position: sticky;
		top: 90px;
	}
`;

export const PriceBlock = styled.div`
	flex-shrink: 0;
	width: 200px;

	${media.greaterThan('md')`
        width: 300px;
    `}

	& > span {
		display: block;
		font-size: 30px;
		margin-bottom: 30px;
	}

	button {
		width: 100%;
		margin: 0;
	}
`;

export default Wrapper;
