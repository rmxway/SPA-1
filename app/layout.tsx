import '@/public/assets/fonts/icofont/icofont.scss';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/registry';

const Font = Roboto({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	preload: true,
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Green Shop | Brand',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className={Font.className}>
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</body>
	</html>
);

export default RootLayout;
