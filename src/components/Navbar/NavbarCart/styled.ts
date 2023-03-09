import styled from 'styled-components/macro';

import { media } from '@/theme';

export const Cart = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 0px;
    height: 20px;

	.icofont {
		margin-top: -10px;
		font-size: 1.35rem;
		color: #222;
	}

	${media.greaterThan('xs')`
        height: auto;
        font-size: 1.25rem;
        .icofont {
            font-size: 26px;
            margin-left: 5px;
        }
    `}
`;

export const Count = styled.div`
	position: absolute;
	border-radius: 100%;
	top: -14px;
	right: -10px;
	width: 20px;
	height: 20px;
	background-color: #222;
	border: 2px solid ${(props) => props.theme.colors.success};
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	line-height: 1.35;
	letter-spacing: -1px;

	${media.greaterThan('xs')`
        top: -10px;
        right: -12px;
        width: 20px;
        height: 20px;
    `}
`;
