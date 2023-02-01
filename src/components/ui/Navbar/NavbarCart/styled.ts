import styled from 'styled-components';

export const Cart = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	.icofont {
		margin-top: -10px;
		margin-left: 5px;
		font-size: 26px;
		color: #222;
	}
`;

export const Count = styled.div`
	position: absolute;
	border-radius: 100%;
	top: -10px;
	right: -12px;
	width: 20px;
	height: 20px;
	background-color: #222;
	border: 2px solid ${(props) => props.theme.colors.success};
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	line-height: 1.35;
	letter-spacing: -1px;
`;
