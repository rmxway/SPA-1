import { motion } from 'framer-motion';
import Link from 'next/link';
import { darken } from 'polished';
import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const cartVariant = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const elementsVars = {
	hidden: { y: -5, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0.4,
		},
	},
};

export const Item = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: stretch;
	flex-direction: row;
	background-color: #fff;
	width: 100%;
	border-radius: ${theme.radius.borderRadius};
	margin-bottom: 10px;
	transition: 0.2s box-shadow;
	padding-right: 40px;

	&:hover {
		box-shadow: ${theme.layout.shadow};
	}

	img {
		margin: 10px 0 10px 10px;
		flex-basis: 65px;
		display: block;
		object-fit: cover;
		border-radius: ${theme.radius.borderRadius};
		flex-shrink: 0;

		${media.lessThan('xsD')`
            width: 85px;
            height: 85px;
        `}
	}

	${media.greaterThan('xs')`
        padding-right: 10px;
    `};
`;

export const Content = styled(motion.div)`
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	flex-grow: 1;

	& > a {
		align-self: center;
		flex-shrink: 0;
	}

	${media.lessThan('mdD')`
        gap: 10px;
    `}
`;

export const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 5px;
	padding-top: 10px;
	padding-bottom: 10px;

	${media.greaterThan('xs')`
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding: 0;
    `}
`;

export const Title = styled(Link)`
	display: flex;
	flex-direction: column;
	align-self: normal;
	justify-content: center;
	color: ${(props) => darken(0.1, props.theme.colors.success)};
	text-decoration: none;
	flex-grow: 1;
	line-height: 1;

	strong {
		display: block;
		margin-bottom: 10px;

		${media.greaterThan('xs')`
            margin-bottom: 5px;
        `}
	}

	& strong + span {
		font-size: 0.9rem;
		line-height: 1.1;
		max-height: 34px;
		color: ${theme.colors.gray.$6};
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Count = styled.div`
	position: relative;
	flex-shrink: 0;
`;

export const Price = styled.div`
	font-size: 20px;
	min-width: auto;
	text-align: left;
	flex-shrink: 0;

	${media.greaterThan('xs')`
        min-width: 70px;
        text-align: right;
    `}
`;

export const Delete = styled.button`
	position: absolute;
	align-self: center;
	top: 5px;
	right: 5px;
	flex-shrink: 0;
	border: 2px solid ${theme.colors.gray.$3};
	appearance: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	border-radius: 25px;
	cursor: pointer;
	transition:
		0.1s border-color,
		color;
	color: ${theme.colors.gray.$4};

	i {
		position: absolute;
		font-size: 1.5rem;
	}

	&:hover {
		border-color: ${theme.colors.danger};

		i:before {
			color: ${theme.colors.danger};
		}
	}

	${media.greaterThan('xs')`
        position: relative;
        top: auto;
	    right: auto;
    `}
`;
