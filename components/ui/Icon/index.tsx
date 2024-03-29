import { ElementType } from 'react';

import { Icofont } from '@/services';

interface IconProps {
	as?: ElementType;
	icon: Icofont;
	size?: number;
	className?: string;
}

/**
 * Icon component which use icons from icofont
 * @param {?string} as - tag name
 * @param {icon} icon - from icofont
 * @param {?number} size - size in pixels
 * @returns
 */

export const Icon = ({ as: Tag = 'i', icon = 'cart', size, className, ...props }: IconProps) => (
	<Tag className={`icofont icofont-${icon} ${className}`} {...props} style={{ fontSize: `${size}px` }} />
);
