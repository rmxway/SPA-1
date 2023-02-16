import styled, { css } from 'styled-components/macro';

import { fadeIn } from '@/theme';

export const Info = styled.div`
	color: ${(props) => props.theme.colors.gray.$6};
`;

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
	text-transform: uppercase;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	color: ${(props) => props.theme.colors.gray.$6};

	&:hover {
		color: ${(props) => props.theme.colors.gray.$7};
	}

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
