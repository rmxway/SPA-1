import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexboxTypes {
	nowrap?: boolean;
	justify?: string;
	align?: string;
	direction?: string;
}

const StyledFlexbox = styled.div<FlexboxTypes>`
	display: flex;
	flex-wrap: ${(props) => (props.nowrap ? 'nowrap' : 'wrap')};
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	flex-direction: ${(props) => props.direction};
`;

const Flexbox: FC<PropsWithChildren<FlexboxTypes>> = ({ children, ...props }) => (
	<StyledFlexbox {...props}>{children}</StyledFlexbox>
);

export { Flexbox };
export default Flexbox;
