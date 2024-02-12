import { motion } from 'framer-motion';
import styled from 'styled-components';

import { LinkIconStyle } from '@/components/ui/LinkIcon/styled';
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

export const Cart = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	flex-direction: column;

	${media.greaterThan('sm')`
	 	flex-direction: row;
	`}
`;

export const Wrapper = styled(motion.div)`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;

	${LinkIconStyle} {
		position: absolute;
		left: 0;
		top: -24px;
	}

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
	padding: 10px;
	background-color: #fff;
	border-radius: ${theme.radius.borderRadius};

	${media.greaterThan('sm')`
        position: sticky;
        top: 90px;
        padding: 20px;
        margin-top: 0;
        width: 25%;
        min-width: 250px;
	`}

	button {
		margin-bottom: 0;
		width: 100%;
	}
`;

export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 5px;
	text-transform: uppercase;

	${media.lessThan('smD')`
        font-size: 20px;
    `}
`;

export const Total = styled.div`
	font-size: 22px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;

	span {
		font-size: 32px;
		margin-left: 10px;
		color: ${theme.colors.dark};
	}

	${media.lessThan('smD')`
        font-size: 20px;

        span {
            font-size: 26px
        }
    `}
`;

export default Cart;
