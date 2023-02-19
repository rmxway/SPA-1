import styled from 'styled-components/macro';

import { media } from '@/theme';

export const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	background-color: #fff;
	width: 100%;
	padding: 10px 20px;
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
		flex-shrink: 0;
	}

	${media.greaterThan('xs')`
        justify-content: flex-start;
        // align-items: center;
    `}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	strong {
		margin-bottom: 5px;
	}

	& strong + div {
		font-size: 0.9rem;
		line-height: 1.1;
		color: ${(props) => props.theme.colors.gray.$6};
	}
`;

export const Price = styled.div`
	margin-top: 10px;
	font-size: 1.2rem;
	min-width: 100px;
	text-align: left;

	${media.greaterThan('xs')`
        margin-left: 10px;
        font-size: 22px;
        min-width: 120px;
        text-align: right;
    `}
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
