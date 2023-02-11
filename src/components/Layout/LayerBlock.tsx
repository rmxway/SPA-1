import styled from 'styled-components/macro';

const LayerBlock = styled.div<{ mt?: boolean }>`
	padding: 20px;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin-bottom: 20px;
	background-color: #fff;
	${(props) => props.mt && `margin-top: 30px;`}
`;

export { LayerBlock };
export default LayerBlock;
