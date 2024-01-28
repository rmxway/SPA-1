import { motion } from 'framer-motion';
import styled from 'styled-components';

export const WrapperComponent = styled.div`
	min-height: 600px;
`;

export const Wrapper = styled.div`
	position: relative;
	margin-left: -10px;
	margin-right: -10px;
`;

export const FetchingBlock = styled(motion.div)`
	position: relative;
	display: flex;
	flex-wrap: wrap;
    align-items: normal;
`;

export const containerVars = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
