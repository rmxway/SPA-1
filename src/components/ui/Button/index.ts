import { darken, desaturate } from 'polished';
import styled, { css } from 'styled-components/macro';

export interface ButtonProps {
	success?: boolean;
	danger?: boolean;
	primary?: boolean;
	white?: boolean;
	w100?: boolean;
	margins?: boolean;
}

const mixinButton = ($background = '#fff', $color = '#fff') => css`
	border-color: transparent;
	background-color: ${$background};
	color: ${$color};

	&:hover {
		background-color: ${darken(0.05, $background)};
	}

	&:active {
		background-color: ${darken(0.1, $background)};
	}

	&:disabled,
	&:disabled:hover {
		opacity: 0.45;
		background-color: ${desaturate(0.4, $background)};
		color: ${desaturate(0.6, $color)};
		cursor: default;
	}
`;

export const ButtonUI = styled.button<ButtonProps>`
	appearance: none;
	border: 1px solid #aaa;
	background: none;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	padding: 11px 16px 10px;
	color: #777;
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
	${(props) =>
		props.margins &&
		`
        margin-bottom: 10px;
        margin-right: 10px;
    `}

	cursor: pointer;
	line-height: 1;
	transition: 0.1s all;

	&:hover {
		background-color: #f9f9f9;
	}

	&:active {
		background-color: #f1f1f1;
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${(props) => props.theme.colors.gray.$2};
		color: ${(props) => props.theme.colors.gray.$5};
		cursor: default;
	}

	${(props) => {
		if (props?.success) return mixinButton(props.theme.colors.success);
		if (props?.danger) return mixinButton(props.theme.colors.danger);
		if (props?.primary) return mixinButton(props.theme.colors.primary, '#6d410a');
		if (props?.white) return mixinButton('#fff', props.theme.colors.success);
		return null;
	}}

	${(props) => {
		if (props?.w100)
			return css`
				width: 100%;
			`;
		return null;
	}}
`;
