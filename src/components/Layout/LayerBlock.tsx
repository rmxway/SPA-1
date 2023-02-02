import styled from 'styled-components/macro';

const LayerBlock = styled.div`
	padding: 20px;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin-bottom: 20px;
	background-color: #fff;
`;

export { LayerBlock };
export default LayerBlock;
