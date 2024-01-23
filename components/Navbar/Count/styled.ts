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
	font-size: 11px;
    text-align: center;
	font-weight: 900;
	line-height: 1.8;
	letter-spacing: -0.5px;

	${media.greaterThan('xs')`
        top: -10px;
        right: -14px;
        width: 22px;
        height: 22px;
    `}
`;

export default CountStyled;
