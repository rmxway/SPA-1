import styled from 'styled-components';

import { Grid, LayerBlock } from '@/components/Layout';
import { media } from '@/theme';

export const FirstBlock = styled(Grid)`
	position: relative;
	padding-bottom: 10px;

	${media.greaterThan('sm')`
        align-items: center;
        grid-auto-flow: column;
        grid-template-columns: 450px 1fr;
    `}
`;

export const SecondBlock = styled(Grid)`
	gap: 20px;
	padding-bottom: 20px;

	${media.greaterThan('md')`
        grid-template-columns: 1fr 1fr;
    `}

	${LayerBlock} {
		margin-bottom: 0;
	}
`;

export const ImageLogos = styled.div`
	position: relative;
	text-align: center;

	img {
		mix-blend-mode: multiply;
		max-width: 100%;
		height: auto;
		margin: 0;
		object-position: left;
		object-fit: contain;
	}
`;
