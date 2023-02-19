import styled, { css } from 'styled-components/macro';

import { fadeIn, media } from '@/theme';

export const Info = styled.div`
	color: ${(props) => props.theme.colors.gray.$6};
	font-size: 0.9rem;
	margin: 10px 0;

	${media.greaterThan('xs')`
        font-size: 1rem;
    `}
`;

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
	text-transform: uppercase;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	font-size: 0.6rem;
	color: ${(props) => props.theme.colors.gray.$6};

	&:hover {
		color: ${(props) => props.theme.colors.gray.$7};
	}

	${media.greaterThan('xs')`
        font-size: 0.8rem;
    `}

	${fadeIn}

	.icofont {
		font-size: 1.5rem;
		line-height: 30px;

		${(props) =>
			props.left &&
			css`
				transform: rotate(90deg);
			`}

		${(props) =>
			props.right &&
			css`
				transform: rotate(-90deg);
			`}
	}
`;
