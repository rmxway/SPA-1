import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/registry';

const Font = Roboto({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	preload: true,
});

export const metadata: Metadata = {
	title: 'Green Shop',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className={Font.className}>
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</body>
	</html>
);

export default RootLayout;
