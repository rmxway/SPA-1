import styled from 'styled-components/macro';

import { media } from '@/theme';

export const Item = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: row;
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
		width: 70px;
		height: 70px;
		object-fit: cover;
		margin-right: 20px;
		border-radius: ${(props) => props.theme.radius.borderRadius};
		flex-shrink: 0;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	flex-grow: 1;
`;

export const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	${media.greaterThan('xs')`
        flex-direction: row;
        align-items: center;
    `}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	strong {
		padding-right: 15px;
		margin-bottom: 10px;

		${media.greaterThan('xs')`
            padding-right: 0;
            margin-bottom: 5px;
        `}
	}

	& strong + span {
		font-size: 0.9rem;
		line-height: 1.1;
		max-height: 34px;
		color: ${(props) => props.theme.colors.gray.$6};
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const Price = styled.div`
	font-size: 22px;
	min-width: auto;
	text-align: left;
	margin-top: 10px;

	${media.greaterThan('xs')`
        margin-left: 10px;
        min-width: 80px;
        text-align: right;
    `}
`;

export const Delete = styled.button`
	position: absolute;
	top: 7px;
	right: 7px;
	flex-shrink: 0;
	border: 2px solid ${(props) => props.theme.colors.gray.$3};
	margin-left: 20px;
	appearance: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	border-radius: 25px;
	cursor: pointer;
	transition: 0.1s border-color, color;
	color: ${(props) => props.theme.colors.gray.$4};

	i {
		position: absolute;
		font-size: 1.5rem;
	}

	&:hover {
		border-color: ${(props) => props.theme.colors.danger};

		i:before {
			color: ${(props) => props.theme.colors.danger};
		}
	}

	${media.greaterThan('xs')`
        position: relative;
        top: 2px;
        right: 0;
    `}
`;
