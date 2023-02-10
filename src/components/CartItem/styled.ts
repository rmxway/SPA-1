import styled from 'styled-components/macro';

export const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
	width: 100%;
	padding: 20px;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin-bottom: 10px;
	transition: 0.12s;

	&:hover {
		box-shadow: ${(props) => props.theme.layout.shadow};
	}

	img {
		min-width: 65px;
		width: 65px;
		height: 65px;
		object-fit: contain;
		margin-right: 20px;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	strong {
		margin-bottom: 5px;
	}
`;

export const Price = styled.div`
	margin-left: 10px;
	font-size: 22px;
	min-width: 120px;
    letter-spacing: 1px;
	text-align: right;
`;

export const Delete = styled.button`
	position: relative;
	border: 2px solid ${(props) => props.theme.colors.gray.$3};
	margin-left: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
    border-radius: 30px;
	cursor: pointer;
	transition: 0.1s all;
	color: ${(props) => props.theme.colors.gray.$4};

    i {
		font-size: 1.7rem;
        margin-top: 1px;
	}

	&:hover {
		border-color: ${(props) => props.theme.colors.danger};

		i:before {
			color: ${(props) => props.theme.colors.danger};
		}
	}
`;
