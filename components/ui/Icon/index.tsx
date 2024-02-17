import { ElementType } from 'react';

import { Icofont } from '@/services';

interface IconProps {
	as?: ElementType;
	icon: Icofont;
	size?: number;
	className?: string;
}

export const Icon = ({ as: Tag = 'i', icon = 'cart', size, className, ...props }: IconProps) => (
	<Tag className={`icofont icofont-${icon} ${className}`} {...props} style={{ fontSize: size }} />
);
