import { MotionProps } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { NavbarItem } from '../styled';

export interface NavbarProps {
	title?: string;
	url: string;
	component?: ReactNode;
}

type NavbarTypes = NavbarProps & HTMLAttributes<HTMLDivElement> & MotionProps;

export const NavLink: FC<NavbarTypes> = ({ title, url, component, children, ...props }) => {
	const pathname = usePathname();
	const isActive = pathname === url;

	return (
		<NavbarItem {...props}>
			<Link href={url} />
			{title}
			{component}
			{isActive && children}
		</NavbarItem>
	);
};

export default NavLink;
