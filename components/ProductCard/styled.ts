import { motion } from 'framer-motion';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { WrapperFavorite } from '@/components/ui/Favorite/styled';
import { defaultTheme as theme } from '@/theme';
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
	justify-content: center;
	height: 120px;
	text-decoration: none;
	margin: 0 20px;

	&:after {
		position: absolute;
		content: '';
		background-color: white;
		left: -1px;
		top: -1px;
		pointer-events: none;
		z-index: -1;
		height: 102%;
		width: 102%;
	}

	&:hover:after {
		z-index: 0;
	}

	@keyframes fetched {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	${media.greaterThan('sm')`
        height: 170px;
    `}

	.fetched {
		animation: fetched 0.4s;
		animation-fill-mode: forwards;
	}
`;

export const ProductWrapper = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 12px;
	border-radius: ${theme.radius.borderRadius};
	transition: 0.3s box-shadow;
	background-color: #fff;

	a {
		width: 100%;
	}

	${WrapperFavorite} {
		position: absolute;
		top: 0;
		right: 0;
	}

	${WrapperImagesStyled} {
		img {
			min-width: 100px;
			min-width: 100px;
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
			margin: auto;
		}
	}

	&:hover {
		box-shadow: ${theme.layout.shadow};
	}

	button {
		width: 100%;
		margin-top: 10px;
		align-self: center;
	}

	${media.greaterThan('sm')`
        padding: 16px;
    `}
`;

export const Title = styled(Link)`
	font-size: 14px;
	font-weight: 400;
	line-height: 1.15;
	flex-basis: 35px;
	text-decoration: none;
	color: initial;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;

	&:hover {
		text-decoration: underline;
	}

	${media.greaterThan('xs')`
        font-size: 16px;
    `}
`;

export const Price = styled.div`
	font-size: 1.3rem;
	margin-bottom: 5px;

	${media.greaterThan('xs')`
        font-size: 1.5rem;
    `}
`;

export const Tools = styled.div`
	font-weight: 500;
	width: 100%;
	margin: 10px 0 20px;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	flex-shrink: 0;

	& > span {
		font-weight: 600;
	}
`;

export const RatingColor = styled.span`
	color: ${({ children }) => {
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
	color: ${theme.colors.gray.$5};
`;

export const Description = styled.div<{ open: boolean }>`
	display: -webkit-box;
	font-size: 14px;
	line-height: 1.3;
	text-align: left;
	max-height: 0;
	transition: 0.4s all;
	opacity: 0;
	width: 100%;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
    word-break: break-all;

	${(props) =>
		props.open &&
		css`
			max-height: 200px;
			opacity: 1;
		`}
`;
