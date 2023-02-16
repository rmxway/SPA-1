import styled from 'styled-components/macro';

import { LazyImage } from '@/components/Layout';
import { media } from '@/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	min-height: 500px;

	${media.greaterThan('md')`
        flex-wrap: nowrap;
    `}
`;

export const Title = styled.h1`
	text-transform: uppercase;
	line-height: 1.2;
    margin-top: 0;
`;

export const Image = styled(LazyImage)`
	width: 100%;
	max-height: 400px;
	flex-grow: 1;
	object-fit: contain;
	margin-bottom: 30px;
	order: 1;
    border-radius: ${props => props.theme.radius.borderRadius};

    &.icofont {
        font-size: 3rem;
    }

	${media.greaterThan('md')`
        max-width: 500px;
    `}
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
