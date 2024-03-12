import { MotionProps } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributes, ReactNode } from 'react';

import { Line, NavbarItem } from '../styled';

export interface NavbarProps {
	title?: string;
	url: string;
	component?: ReactNode;
}

type NavbarTypes = NavbarProps & HTMLAttributes<HTMLDivElement> & MotionProps;

export const NavLink = ({ title, url, component, ...props }: NavbarTypes) => {
	const pathname = usePathname();
	const isActive = pathname === url;

	return (
		<NavbarItem {...props}>
			<Link href={url} />
			{title}
			{component}
			{isActive ? (
				<Line
					layoutId="underline"
					transition={{ duration: 0.2, type: 'spring', stiffness: 200, damping: 22 }}
				/>
			) : null}
		</NavbarItem>
	);
};

export default NavLink;
