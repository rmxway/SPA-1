import { FC } from 'react';

import { Gradients } from '@/@types/styled';

import { GradientTextStyled } from './styled';

interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: number;
	gradient?: keyof Gradients;
}

/**
 *
 * @param gradient(Gradients) - main, dark
 * @param size(number) - size in pixels
 * @returns
 */

export const GradientText: FC<GradientTextProps> = ({ size, gradient = 'main', children, ...props }) => (
	<GradientTextStyled $size={size} $gradient={gradient} {...props}>
		{children}
	</GradientTextStyled>
);
export default GradientText;
