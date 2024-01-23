import { motion } from 'framer-motion';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { media } from '@/theme/media';

export const BlockImgItem = styled.div`
	position: relative;
	flex-grow: 1;
	display: block;

	& + img {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
		width: 100%;
		height: 100%;
		z-index: -10;
		max-height: 500px;
		opacity: 0;
		object-fit: contain;
		object-position: center;
		margin: 20px auto;
	}

	& + img:first-of-type {
		z-index: 0;
	}

	&:hover {
		& + img {
			z-index: 1;
		}
	}
`;

export const WrapperImagesStyled = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: stretch;
	justify-content: center;
	height: 200px;
	text-decoration: none;

	&:after {
		position: absolute;
		content: '';
		background-color: white;
		left: 0;
		top: 0;
		pointer-events: none;
		z-index: -1;
		height: 100%;
		width: 100%;
	}

	&:hover:after {
		z-index: 0;
	}

	&:not(:has(${BlockImgItem}:nth-of-type(2))) {
		${BlockImgItem}:after {
			display: none;
		}
	}

	&:not(:hover) ${BlockImgItem}:first-of-type {
		&:after {
			background-color: ${(props) => props.theme.colors.danger};
		}
	}

	${BlockImgItem} {
		&:after {
			position: absolute;
			bottom: 0;
			left: 2px;
			right: 2px;
			height: 2px;
			z-index: 1;
			background-color: ${(props) => props.theme.colors.gray.$3};
			content: '';
			transition: all 0.1s;
		}
	}

	${BlockImgItem}:hover {
		&:after {
			background-color: ${(props) => props.theme.colors.danger};
		}
	}

	@keyframes fetched {
		from {
			filter: blur(10px);
			opacity: 0;
		}
		to {
			filter: blur(0px);
			opacity: 1;
		}
	}

	.fetched {
		animation: fetched 0.3s;
		animation-fill-mode: forwards;
	}
`;

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

        ${WrapperImagesStyled} {
            img {
                width: 190px;
                height: 190px;
                object-fit: contain;
                object-position: center;
                margin: auto;
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
