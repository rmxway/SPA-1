import styled from 'styled-components/macro';

import { LazyImage } from '@/components/Layout';

export const Wrapper = styled.div`
	padding: 20px 0;
	display: flex;
	flex-wrap: nowrap;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	line-height: 1.2;
	font-weight: 100;
`;

export const Image = styled(LazyImage)`
	width: 200px;
	height: 200px;
	flex-shrink: 0;
	object-fit: contain;
	margin-right: 30px;
`;

export const Info = styled.div`
	line-height: 1;
	flex-grow: 1;
	margin-right: 30px;
`;

export const PriceBlock = styled.div`
	width: 200px;
	flex-shrink: 0;

	span {
		display: block;
		font-size: 30px;
		margin-bottom: 30px;
	}

	button {
		width: 100%;
	}
`;
