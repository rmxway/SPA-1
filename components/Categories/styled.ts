import styled, { css } from 'styled-components';

export const Category = styled.button<{ $active: boolean }>`
	${({ theme, $active }) => css`
		padding: 8px 16px;
		min-width: 80px;
		border-radius: ${theme.radius.borderRadius};
		border: 1px solid ${theme.colors.gray.$4};
		cursor: pointer;
		transition: 0.2s;
		text-transform: capitalize;
        color: inherit;

		&:hover {
			border: 1px solid ${theme.colors.gray.$6};
			opacity: 0.9;
		}

		${$active &&
		css`
			border: 1px solid ${theme.colors.gray.$7};
			background-color: ${theme.colors.gray.$7};
			color: white;
		`}
	`}
`;
