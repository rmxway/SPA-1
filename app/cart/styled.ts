import { motion } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const contentVariant = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

export const trashVariant = {
	initial: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, scale: 0.5 },
};

export const Cart = styled.div`
	position: relative;
	margin: 20px 0;
	display: flex;
	align-items: flex-start;
	flex-direction: column;

	${media.greaterThan('sm')`
	 	flex-direction: row;
	`}
`;

export const Trash = styled(motion.div)`
	position: absolute;
	right: 0;
	top: -25px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${theme.colors.gray.$6};
	border-radius: ${theme.radius.borderRadius};
	transition: 0.2s;

	.icofont {
		margin-left: 5px;
		line-height: 1;
	}

	&:hover {
		color: ${theme.colors.gray.$9};
	}
`;

export const Wrapper = styled(motion.div)`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;

	${media.greaterThan('sm')`
		margin-right: 20px;
		flex-grow: 1;
	`}
`;

export const Sidebar = styled(motion.div)`
	position: relative;
	width: 100%;
	margin-top: 10px;
	min-height: 100px;
	flex-shrink: 0;
	padding: 20px;
	background-color: #fff;
	border-radius: ${theme.radius.borderRadius};

	${media.greaterThan('sm')`
        position: sticky;
        top: 90px;
        margin-top: 0;
        width: 25%;
        min-width: 250px;
	`}

	button {
		margin-top: 20px;
		margin-bottom: 0;
		width: 100%;
	}
`;

export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 5px;
	text-transform: uppercase;
`;

export const Total = styled.div`
	font-size: 22px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		font-size: 32px;
		margin-left: 10px;
		color: ${theme.colors.dark};
	}
`;

export default Cart;
