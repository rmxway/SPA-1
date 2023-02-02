import styled from 'styled-components/macro';

export const ProductWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 16px;
	width: calc(25% - 20px);
	border-radius: ${(props) => props.theme.radius.borderRadius};
	margin: 10px;
	text-align: center;
	transition: 0.3s all;
	background-color: #fff;
	opacity: 0;
	animation: fadeIn 0.2s linear 0s 1 forwards;

	&:hover {
		box-shadow: ${(props) => props.theme.layout.shadow};
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: contain;
		object-position: center;
		margin: 20px auto;
	}

	button {
		margin-top: 10px;
		align-self: center;
	}
`;

export const Title = styled.div`
	font-size: 16px;
	font-weight: 600;
	flex-shrink: 0;
	margin-bottom: 10px;
	width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	min-height: 40px;
`;

export const Price = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row-reverse;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 10px;
	font-size: 24px;
	font-weight: 500;
	margin: 20px 0;
`;

export const Tools = styled.div`
	flex-direction: column;
	align-items: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: space-between;

	span {
		font-weight: 600;
	}
`;

export const Rating = styled.span`
	color: ${({ children, theme }) => {
		if (children) {
			if (Number(children) > 4) return theme.colors.success;
			if (Number(children) < 4 && Number(children) > 3) return theme.colors.primary;
			if (Number(children) < 3) return theme.colors.danger;
		}
		return theme.colors.dark;
	}};
`;

export const Help = styled.button`
	font-size: 12px;
	font-weight: 600;
	align-self: center;
	background: none;
	border: none;
	display: inline-block;
	cursor: pointer;
	text-transform: uppercase;
	margin-bottom: 10px;
	color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.div`
	font-size: 14px;
	line-height: 1.3;
	text-align: left;
	margin-bottom: 10px;
	max-height: 0;
	overflow: hidden;
	transition: 0.3s all;
	opacity: 0;

	&.open {
		max-height: 400px;
		opacity: 1;
	}
`;
