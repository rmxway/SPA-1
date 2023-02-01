import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledLayerBlock = styled.div`
	padding: 20px;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin-bottom: 20px;
	background-color: #fff;
`;

const LayerBlock: FC<PropsWithChildren> = ({ children }) => <StyledLayerBlock>{children}</StyledLayerBlock>;

export { LayerBlock };
export default LayerBlock;
