import { HTMLMotionProps } from 'framer-motion';
import { forwardRef, HTMLAttributes, Ref } from 'react';

import { Icon } from '@/components/ui/Icon';
import { Icofont } from '@/services';

import { LinkIconStyle, linkIconVariant } from './styled';

interface LinkIconProps extends HTMLAttributes<HTMLDivElement> {
	icon?: Icofont;
	initial?: boolean;
	onClick?: () => void;
}

type LinkIconType = LinkIconProps & HTMLMotionProps<'div'>;

/**
 * Text link with icon from icofont
 * @param {string} icon - select icon
 * @param {boolean} initial - initial animation
 * @param {function} onClick - event
 */

export const LinkIcon = forwardRef(
	({ icon, initial, onClick, children, ...props }: LinkIconType, ref: Ref<HTMLDivElement>) => (
		<LinkIconStyle
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
