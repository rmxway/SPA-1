import styled, { css } from 'styled-components';

export const LabelStyled = styled.label`
	${({ theme }) => css`
		display: block;
		margin-bottom: 5px;
		color: ${theme.colors.label};
		text-transform: uppercase;
		font-size: 10px;
	`}
`;
