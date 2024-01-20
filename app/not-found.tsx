'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container, LayerBlock } from '@/components/Layout';

export default function NotFound() {
	const path = usePathname();

	return (
		<Container>
			<LayerBlock $mt>
				<h2>Not Found: {path}</h2>
				<Link href="/">Return Home</Link>
			</LayerBlock>
		</Container>
	);
}
