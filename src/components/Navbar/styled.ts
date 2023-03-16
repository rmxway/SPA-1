import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled, { DefaultTheme } from 'styled-components/macro';

import { media } from '@/theme';

const logoColor = (props: { theme: DefaultTheme }) => darken(0.3, props.theme.colors.success);

const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 70px;
	background-color: ${(props) => props.theme.colors.success};
	text-align: center;
	display: flex;
	align-items: center;

	a {
		position: relative;
		display: inline-block;
		margin-right: 10px;
		font-size: 1rem;
		color: #222;
		text-decoration: none;
		border-bottom: 2px solid transparent;

		${media.greaterThan('xs')`
            font-size: 20px;
            margin-right: 20px;
        `}

		&:hover {
			color: #444;
		}

		&:last-child {
			margin-right: 0;
		}
	}

	.search {
		flex-grow: 1;
		margin-right: 30px;

		input {
			width: 100%;
		}
	}
`;

const Logo = styled.div`
	display: flex;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	font-size: 2rem;
	font-weight: 600;
	color: ${logoColor};
	line-height: 1;
	padding: 0 10px;
	border: 2px solid ${logoColor};
	overflow: hidden;

	span {
		display: none;
	}

	${media.greaterThan('xs')`
        padding: 0 0 0 10px;

        span {
            text-transform: uppercase;
            font-size: 12px;
            text-align: left;
            background-color: ${logoColor};
            display: flex;
            align-items: center;
            padding: 2px 10px;
            color: ${(props) => props.theme.colors.success};
            margin-left: 10px;
        }
    `}
`;

const Count = styled.div`
	position: absolute;
	border-radius: 100%;
	top: -14px;
	right: -10px;
	width: 20px;
	height: 20px;
	background-color: ${(props) => props.theme.colors.dark};
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

const Line = styled(motion.div)`
	position: absolute;
	left: 0;
	right: 0;
	height: 2px;
	border-radius: 3px;
	background-color: ${(props) => props.theme.colors.dark};

	${media.greaterThan('xs')`
        height: 3px;
    `}
`;

export { Count, Line, Logo, StyledNavbar };
