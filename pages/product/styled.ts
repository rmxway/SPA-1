import Image from 'next/image';
import styled from 'styled-components';

import { WrapperImageStyled } from '@/components/ProductCard/WrapperImage';
import { media } from '@/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	min-height: 500px;

	${media.greaterThan('md')`
        flex-wrap: nowrap;
    `}

	${WrapperImageStyled} {
		min-width: 500px;
		order: 1;
		flex-shrink: 0;
		margin-bottom: 30px;

		${media.greaterThan('md')`
            width: 400px;
            height: 400px;
        `}
	}
`;

export const Title = styled.h1`
	text-transform: uppercase;
	line-height: 1.2;
	margin-top: 0;
`;

export const ProductImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top center;
`;

export const Info = styled.div`
	order: 2;
	flex-grow: 1;

	& > span {
		line-height: 1.5;
		font-size: 20px;
	}

	${media.greaterThan('md')`
        margin-left: 50px;
    `}
`;

export const PriceBlock = styled.div`
	width: 100%;
	flex-shrink: 0;
	order: 3;
	margin-top: 30px;

	${media.greaterThan('md')`
        width: 200px;
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
