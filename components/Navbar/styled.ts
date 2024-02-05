import { motion, Variants } from 'framer-motion';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonUI } from '@/components/ui';
import { defaultTheme as theme, media } from '@/theme';

const logoColor = darken(0.3, theme.colors.success);

export const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 70px;
	background-color: ${theme.colors.success};
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

export const Logo = styled.div`
	position: relative;
	display: flex;
	flex-shrink: 0;
	border-radius: ${theme.radius.borderRadius};
	font-size: 2rem;
	font-weight: 600;
	color: ${logoColor};
	line-height: 1;
	padding: 0 0 0 10px;
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
		text-transform: uppercase;
		font-size: 12px;
		text-align: left;
		background-color: ${logoColor};
		display: flex;
		align-items: center;
		padding: 2px 10px;
		color: ${theme.colors.success};
		margin-left: 10px;
	}
`;

export const NavbarItem = styled.div`
	position: relative;
	display: flex;
	margin-right: 10px;
	font-size: 1.5rem;
	color: #222;
	text-decoration: none;
	margin-bottom: 10px;
	border-bottom: 2px solid transparent;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	${media.greaterThan('sm')`
        margin-bottom: 0;
        margin-right: 20px;
        font-size: 20px;
    `}

	&:hover {
		color: #444;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const Line = styled(motion.div)`
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
	height: 2px;
	border-radius: 3px;
	background-color: ${theme.colors.dark};
`;

export const WrapperNavbarItems = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 0;
	overflow: hidden;
	background-image: ${theme.gradients.main};

	${media.greaterThan('sm')`
        position: relative;
        top: 0;
        height: auto;
        overflow: visible;
        opacity: 1;
        background-image: none;
        flex-direction: row;
        justify-content: flex-end;
    `}
`;

export const variantsWrapperNavbar: Variants = {
	visible: {
		height: '100%',
		padding: '40px 20px',
		opacity: 1,
	},
	hidden: {
		height: 0,
		padding: 0,
		opacity: 0,
	},
};

export const BurgerButton = styled(ButtonUI)<{ $isOpen: boolean }>`
	position: relative;
	padding: 8px;
	width: 32px;
	height: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${({ $isOpen }) => ($isOpen ? 'center' : 'space-between')};

	span {
		display: inline-block;
		height: 2px;
		border-radius: 50px;
		min-width: 20px;
		background-color: ${theme.colors.success};
		transition: all 0.2s;

		${({ $isOpen }) =>
			$isOpen &&
			css`
				&:first-child {
					transform: rotate(45deg);
					transform-origin: 7px;
				}

				&:nth-child(2) {
					opacity: 0;
				}

				&:last-child {
					transform: rotate(-45deg);
					transform-origin: 7px;
				}
			`}
	}

	${media.greaterThan('sm')`
        display: none;
    `}
`;
