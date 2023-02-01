import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	padding: 0 10px;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
`;

const Container: FC<PropsWithChildren> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export { Container };
export default Container;
