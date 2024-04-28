import { FC } from 'react';

import { Gradients } from '@/@types/styled';

import { GradientTextStyled } from './styled';

interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: number;
	gradient?: keyof Gradients;
}

export const GradientText: FC<GradientTextProps> = ({ size, gradient, children, ...props }) => (
	<GradientTextStyled $size={size} $gradient={gradient} {...props}>
		{children}
	</GradientTextStyled>
);
export default GradientText;
