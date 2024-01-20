import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, ReactNode } from 'react';

import { Count } from '../Count';
import { Line, NavbarItem } from '../styled';

interface NavLinkProps {
	title?: string;
	url: string;
	component?: ReactNode;
	count?: number;
}

export const NavLinkMotion = memo(({ title, url, component, count }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === url;

	return (
		<NavbarItem>
			<Link href={url} />
			{title}
			{component}
			{count ? <Count {...{ count }} /> : null}

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
