import styled from 'styled-components';

import { media } from '@/theme';

export const NavCountItemStyled = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 0px;
    height: 20px;

	.icofont {
		margin-top: -10px;
        margin-left: 3px;
		font-size: 1.5rem;
		color: #222;
	}

	${media.greaterThan('xs')`
        height: auto;
        font-size: 1rem;
        /* .icofont {
            font-size: 26px;
            margin-left: 5px;
        } */
    `}
`;

export default NavCountItemStyled;
