import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled from 'styled-components';

import { media } from '@/theme';

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
	top: -40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 10px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.gray.$6};
	border: 1px solid ${(props) => props.theme.colors.gray.$5};
	border-radius: ${(props) => props.theme.radius.borderRadius};
	transition: 0.2s;

	.icofont {
		margin-left: 5px;
		line-height: 1;
	}

	&:hover {
		color: ${(props) => props.theme.colors.gray.$9};
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
	border-radius: ${(props) => props.theme.radius.borderRadius};

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
		font-size: 24px;
		font-weight: 900;
		margin-left: 10px;
		color: ${(props) => darken(0.1, props.theme.colors.success)};
	}
`;

export default Cart;