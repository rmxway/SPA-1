import styled, { css } from 'styled-components';

export interface WrapperStickerProps {
	$primary?: boolean;
	$danger?: boolean;
	$dark?: boolean;
	$success?: boolean;
}

export const WrapperSticker = styled.div<WrapperStickerProps>`
	${({ theme, $primary, $danger, $dark, $success }) => css`
		position: relative;
		display: inline-block;
		text-transform: none;
		font-style: normal;
		font-size: 12px;
		font-family: sans-serif;
		font-weight: 600;
		padding: 4px 8px;
		border-radius: ${theme.radius.borderRadius};

		${$primary &&
		css`
			background-color: ${theme.colors.primary};
		`}

		${$danger &&
		css`
			background-color: ${theme.colors.danger};
			color: #fff;
		`}

        ${$dark &&
		css`
			background-color: ${theme.colors.dark};
			color: #fff;
		`}

        ${$success &&
		css`
			background-color: ${theme.colors.success};
		`}

        ${!$primary &&
		!$danger &&
		!$dark &&
		!$success &&
		css`
			background-color: ${theme.colors.gray.$3};
		`}
	`}
`;
