import { motion } from 'framer-motion';
import styled from 'styled-components';

import { media } from '@/theme';

export const CountStyled = styled(motion.div)`
	position: absolute;
	border-radius: 100%;
	top: -14px;
	right: -10px;
	width: 20px;
	height: 20px;
	background-color: ${(props) => props.theme.colors.dark};
	border: 2px solid ${(props) => props.theme.colors.success};
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	line-height: 1.35;
	letter-spacing: -1px;

	${media.greaterThan('xs')`
        top: -10px;
        right: -12px;
        width: 20px;
        height: 20px;
    `}
`;

export default CountStyled;
