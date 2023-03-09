import styled, { css } from 'styled-components/macro';

import { fadeIn, media } from '@/theme';

export const Info = styled.div`
	color: ${(props) => props.theme.colors.gray.$6};
	font-size: 0.9rem;

	${media.greaterThan('xs')`
        font-size: 1rem;
    `}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
    min-height: 30px;

	${media.greaterThan('xs')`
        flex-direction: row;
    `}
`;

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
	text-transform: uppercase;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	font-size: 0.6rem;
	line-height: 1;
	height: 26px;
	padding: 0;
	border: 1px solid ${(props) => props.theme.colors.gray.$4};
	border-radius: calc(${(props) => props.theme.radius.borderRadius} * 1.1);
	margin-right: 2px;
	color: ${(props) => props.theme.colors.gray.$6};

	&:hover {
		color: ${(props) => props.theme.colors.gray.$7};
	}

	${media.greaterThan('xs')`
        font-size: 0.8rem;
        height: 30px;
        margin-right: 3px;
    `}

	${fadeIn}

	.icofont {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 1.2rem;
	}

	${(props) =>
		props.left &&
		css`
			padding-right: 10px;
			.icofont {
				transform: rotate(90deg);
			}
		`}

	${(props) =>
		props.right &&
		css`
			padding-left: 10px;
			.icofont {
				transform: rotate(90deg) scale(1, -1);
			}
		`}
`;
