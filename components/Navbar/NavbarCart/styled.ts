import styled from 'styled-components';

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

export default Cart;
