import Image from 'next/image';
import styled from 'styled-components';

import { Container, Flexbox, LayerBlock } from '@/components/Layout';
import { media } from '@/theme';

export const Wrapper = styled(Container)`
	position: relative;

	${Flexbox} {
		flex-wrap: wrap;
	}

	${media.greaterThan('md')`
        ${Flexbox} {
            flex-wrap: nowrap;
        }
    `}

	.swiper {
		margin-bottom: 20px;
		border-radius: 10px;
		border: 1px solid #ddd;
		min-width: 1%;
		background-color: ${(props) => props.theme.colors.dark};

		.swiper-slide {
			height: 25vw;
			min-height: 450px;
			max-height: 600px;
			padding: 8px;
		}
	}

	img {
		height: 100%;
		width: 100%;
		display: block;
		object-position: center;
		object-fit: contain;

		/* ${media.greaterThan('md')`
            width: 100%;
            height: 350px;
            margin-bottom: 0;
        `} */
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
	// flex-grow: 1;
	// width: auto;
	// max-width: 100%;
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
	z-index: 1;
	position: relative;
	flex-shrink: 0;
	width: 300px;

	${LayerBlock} {
		position: sticky;
		top: 90px;
	}

	${media.lessThan('md')`
        width: 100%;

        ${LayerBlock} {
            position: fixed;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            border-top: 1px solid #ddd;
            border-radius: 0;
            margin-bottom: 0;
        }
    `}
`;

export const PriceBlock = styled.div`
	position: relative;

	${Flexbox} {
		span {
			display: block;
			font-size: 30px;
		}

		margin-bottom: 30px;
	}

	button {
		width: 100%;
		margin: 0;
	}
`;

export default Wrapper;
