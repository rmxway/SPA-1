import { motion } from 'framer-motion';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { media } from '@/theme/media';

import { WrapperImageStyled } from './WrapperImage';

export const ProductWrapper = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 16px;
	width: 100%;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin: 10px;
	transition: 0.3s box-shadow;
	background-color: #fff;

	a {
		width: 100%;
	}

	${media.greaterThan('xs')`
        width: calc(50% - 20px);

        ${WrapperImageStyled} {
            min-height: 200px;

            img {
                width: 150px;
                height: 150px;
                object-fit: contain;
                object-position: center;
                margin: 20px auto;
            }
        }
    `}

	${media.greaterThan('sm')`
		width: calc(33.33% - 20px);
	`}

	${media.greaterThan('md')`
		width: calc(25% - 20px);
	`}

    &:hover {
		box-shadow: ${(props) => props.theme.layout.shadow};
	}

	button {
		width: 100%;
		margin-top: 10px;
		align-self: center;
	}
`;

export const Title = styled(Link)`
	font-size: 16px;
	font-weight: 400;
	line-height: 1.15;
	flex-shrink: 0;
	margin-bottom: 10px;
	width: 100%;
	text-decoration: none;
	color: initial;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	min-height: 35px;

	&:hover {
		text-decoration: underline;
	}
`;

export const Price = styled.div`
	font-size: 1.5rem;
	margin-bottom: 5px;
`;

export const Tools = styled.div`
	font-weight: 500;
	width: 100%;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	font-size: 14px;

	& > span {
		font-weight: 600;
	}
`;

export const RatingColor = styled.span`
	color: ${({ children, theme }) => {
		if (children) {
			if (Number(children) > 4) return theme.colors.success;
			if (Number(children) < 4 && Number(children) > 3) return theme.colors.primary;
			if (Number(children) < 3) return theme.colors.danger;
		}
		return theme.colors.dark;
	}};
`;

export const Help = styled.button`
	font-size: 12px;
	font-weight: 600;
	align-self: center;
	background: none;
	border: none;
	display: inline-block;
	cursor: pointer;
	text-transform: uppercase;
	margin-bottom: 10px;
	color: ${(props) => props.theme.colors.gray.$5};
`;

export const Description = styled.div<{ open: boolean }>`
	font-size: 14px;
	line-height: 1.3;
	text-align: left;
	max-height: 0;
	overflow: hidden;
	transition: 0.3s all;
	opacity: 0;

	${(props) =>
		props.open
			? css`
					max-height: 400px;
					opacity: 1;
			  `
			: null}
`;