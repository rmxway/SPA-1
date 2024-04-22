import { Gradients } from '@/@types/styled';
import styled, { css } from 'styled-components';

export const GradientTextStyled = styled.div<{ $size?: number; $gradient?: keyof Gradients }>`
	${({ theme, $size, $gradient }) => css`
		font-size: ${$size || 24}px;
		background: ${theme.gradients[$gradient || 'main']};
		display: inline-block;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`}
`;
