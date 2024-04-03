import styled from 'styled-components';

/**
 * This component makes space between flex elements
 * @example  <Flexbox><Element /><Space /><AnotherElement /></Flexbox>
 */
const Space = styled.span`
	flex-grow: 1;
	align-self: stretch;
`;

export { Space };
export default Space;
