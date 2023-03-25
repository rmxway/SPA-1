import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled, { DefaultTheme } from 'styled-components';

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

	.search {
		flex-grow: 1;
		margin-right: 30px;

		input {
			width: 100%;
		}
	}
`;

const Logo = styled.div`
	position: relative;
	display: flex;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	font-size: 2rem;
	font-weight: 600;
	color: ${logoColor};
	line-height: 1;
	padding: 0 10px;
	border: 2px solid ${logoColor};
	overflow: hidden;

	a {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

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

const NavbarItem = styled.div`
	position: relative;
	display: inline-block;
	margin-right: 10px;
	font-size: 1rem;
	color: #222;
	text-decoration: none;
	border-bottom: 2px solid transparent;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

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

export { Line, Logo, NavbarItem, StyledNavbar };
