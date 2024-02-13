import { HTMLMotionProps } from 'framer-motion';
import { forwardRef, Ref } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

import { LinkIconStyle, linkIconVariant } from './styled';

interface LinkIconProps {
	icon?: keyof typeof icofont;
	onClick?: () => void;
	children?: React.ReactNode;
}

export const LinkIcon = forwardRef(
	({ icon, onClick, children, ...props }: LinkIconProps & HTMLMotionProps<'div'>, ref: Ref<HTMLDivElement>) => (
		<LinkIconStyle
			layout
			key="LinkIcon"
			variants={linkIconVariant}
			initial="initial"
			animate="visible"
			exit="hidden"
			{...{ onClick, ref }}
			{...props}
		>
			{children}
			{icon && <i className={`icofont icofont-${icon}`} />}
		</LinkIconStyle>
	),
);

export default LinkIcon;
