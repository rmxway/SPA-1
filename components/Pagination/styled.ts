import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Flexbox } from '@/components/Layout/Flexbox';
import { ButtonStyle } from '@/components/ui/Button/styled';
import { defaultTheme as theme, fadeIn, media } from '@/theme';

export const Info = styled.div`
	color: ${theme.colors.gray.$6};
	font-size: 0.9rem;

	${media.greaterThan('xs')`
        font-size: 1rem;
    `}
`;

export const Wrapper = styled(motion.div)<{ $isItems: boolean }>`
	display: flex;
	flex-direction: column;

	${Flexbox} {
        margin-top: 10px;
    }

	${({ $isItems }) =>
		$isItems &&
		css`
			margin-top: 30px;
		`}

	${media.greaterThan('xs')`
        flex-direction: row;

        ${Flexbox} {
            margin-top: 0;
        }
    `}
`;

export const ArrowButton = styled.button<{ $left?: boolean; $right?: boolean }>`
	text-transform: uppercase;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	font-size: 0.6rem;
	line-height: 1;
	height: 26px;
	padding: 0;
	border: 1px solid ${theme.colors.gray.$4};
	border-radius: calc(${theme.radius.borderRadius} * 1.1);
	margin-right: 2px;
	color: ${theme.colors.gray.$6};

	&:hover {
		color: ${theme.colors.gray.$7};
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

	${({ $left, $right }) => {
		if ($left)
			return css`
				padding-right: 10px;
				.icofont {
					transform: rotate(90deg);
				}
			`;
		if ($right)
			return css`
				padding-left: 10px;
				.icofont {
					transform: rotate(90deg) scale(1, -1);
				}
			`;
		return null;
	}}
`;

export const ButtonPagination = styled(ButtonStyle)`
	margin-right: 2px;
	width: 25px;
	padding: 6px 0;
	text-align: center;
	line-height: 1;

	&,
	&:focus,
	&:active,
	&:link {
		transition-duration: 0s;
	}

	&:hover {
		transition-duration: 0.1s;
	}

	${media.greaterThan('xs')`
        width: 30px;
        padding: 8px 0;
        margin-right: 3px;
    `}
`;
