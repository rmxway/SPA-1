import styled from 'styled-components';

interface FlexboxTypes {
	nowrap?: boolean;
	justify?: string;
	align?: string;
	direction?: string;
	gap?: number;
}

const Flexbox = styled.div<FlexboxTypes>`
	display: flex;
	flex-wrap: ${(props) => (props.nowrap ? 'nowrap' : 'wrap')};
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	flex-direction: ${(props) => props.direction};
	gap: ${(props) => props.gap}px;
`;

export { Flexbox };
export default Flexbox;
