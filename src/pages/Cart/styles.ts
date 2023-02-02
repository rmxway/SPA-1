import { darken } from 'polished';
import styled from 'styled-components/macro';

export const Cart = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: flex-start;
`;

export const Wrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	margin-right: 20px;
`;

export const Sidebar = styled.div`
	position: sticky;
	top: 90px;
	min-width: 300px;
	min-height: 100px;
	padding: 20px;
	background-color: #fff;
	border-radius: ${(props) => props.theme.radius.borderRadius};

    button {
        margin-top: 20px;
        margin-bottom: 0;
        width: 100%;
    }
`;

export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 5px;
	text-transform: uppercase;
`;

export const Total = styled.div`
	font-size: 22px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		font-size: 24px;
		font-weight: 900;
		margin-left: 10px;
		color: ${(props) => darken(0.1, props.theme.colors.success)};
	}
`;
