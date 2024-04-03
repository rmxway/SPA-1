import styled, { css } from 'styled-components';

export const Category = styled.button<{ $active: boolean }>`
	${({ theme, $active }) => css`
		padding: 8px 16px;
		min-width: 80px;
		border-radius: ${theme.radius.borderRadius};
		cursor: pointer;
		transition: 0.2s;
		text-transform: capitalize;
		background-color: ${theme.colors.gray.$4};
		font-weight: 600;
		font-size: 0.8rem;
		color: inherit;

		&:hover {
			opacity: 0.9;
		}

		&:disabled {
			opacity: 0.5;
			background-color: ${theme.colors.gray.$5};
			pointer-events: none;
		}

		${$active &&
		css`
			background-color: ${theme.colors.success};
		`}
	`}
`;
