import { HTMLMotionProps } from 'framer-motion';
import { forwardRef, Ref } from 'react';

import { Icon } from '@/components/ui/Icon';
import { Icofont } from '@/services';

import { LinkIconStyle, linkIconVariant } from './styled';

interface LinkIconProps {
	icon?: Icofont;
	initial?: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
}

/**
 * Text link with icon from icofont
 * @param {string} icon - select icon
 * @param {boolean} initial - initial animation
 * @param {function} onClick - event
 */

export const LinkIcon = forwardRef(
	({ icon, initial, onClick, children, ...props }: LinkIconProps & HTMLMotionProps<'div'>, ref: Ref<HTMLDivElement>) => (
		<LinkIconStyle
			layout
			key="LinkIcon"
			variants={linkIconVariant}
			initial={initial && 'initial'}
			animate="visible"
			exit="hidden"
			{...{ onClick, ref }}
			{...props}
		>
			{children}
			{icon && <Icon {...{ icon }} />}
		</LinkIconStyle>
	),
);

export default LinkIcon;
