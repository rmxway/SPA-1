import Image from 'next/image';
import styled from 'styled-components';

import { Container, LayerBlock } from '@/components/Layout';
import { WrapperSticker } from '@/components/ui/Sticker/styled';
import { media } from '@/theme';

export const Wrapper = styled(Container)`
	position: relative;
	padding-bottom: 160px;

	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	${media.greaterThan('md')`
        grid-template-columns: 1fr 25%;
        padding-bottom: 0;
    `}

	.swiper {
		margin-bottom: 20px;
		border-radius: 10px;
		border: 1px solid #ddd;
		min-width: 1%;
		background-color: ${(props) => props.theme.colors.dark};

		.swiper-slide {
			height: 75vw;
		}

		${media.greaterThan('sm')`
            .swiper-slide {
                min-height: 450px;
                max-height: 550px;
            }
        `}
	}

	img {
		height: 100%;
		width: 100%;
		display: block;
		object-position: center;
		object-fit: contain;
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

	${LayerBlock} {
		background-color: #fff;
	}

	${media.lessThan('mdD')`
        width: 100%;

        ${LayerBlock} {
            position: fixed;
            top: auto;
            bottom: 0;
            padding: 10px 20px 20px;
            left: 0;
            right: 0;
            border-top: 1px solid #ddd;
            border-radius: 0;
            margin-bottom: 0;
        }
    `}

	${media.greaterThan('md')`
        position: relative;

        ${LayerBlock} {
            position: sticky;
            top: 90px;
        }
    `}
`;

export const PriceBlock = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: 20px;

	.side {
		&-price {
			align-items: center;
			justify-content: space-between;
			width: 100%;

			span {
				display: block;
				font-family: sans-serif;
				font-size: 30px;
			}

			${WrapperSticker} {
				bottom: 20px;
			}
		}

		&-info {
			flex-direction: row;
			align-items: center;
			gap: 5px;

			${media.greaterThan('md')`
                flex-direction: column;
                align-items: flex-start;
            `}
		}
	}

	button {
		width: 100%;
		margin: 0;
	}
`;

export default Wrapper;
