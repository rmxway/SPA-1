import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, ReactNode } from 'react';

import { Line, NavbarItem } from '../styled';

export interface navbarTypes {
	title?: string;
	url: string;
	component?: ReactNode;
	onClick?: () => void;
}

export const NavLinkMotion = memo(({ title, url, component, ...props }: navbarTypes) => {
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
});

export default NavLinkMotion;
