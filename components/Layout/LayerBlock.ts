import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * Layer block with rounded corners and white background
 * @param {boolean} $mt - Margin top 30px
 * @param {boolean} $shadow
 */

const LayerBlock = styled(motion.div)<{ $mt?: boolean; $shadow?: boolean }>`
	position: relative;
	padding: 20px;
	border-radius: ${({ theme }) => theme.radius.borderRadius};
	margin-top: ${({ $mt }) => ($mt ? '30px' : 0)};
	margin-bottom: 20px;
	background-color: #fff;
	box-shadow: ${({ $shadow }) => $shadow && `0 0 20px rgba(0,0,0,.3)`};
`;

export { LayerBlock };
export default LayerBlock;
