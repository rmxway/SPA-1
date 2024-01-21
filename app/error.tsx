'use client';

import { Container } from '@/components/Layout';

export default function Error({ error }: { error: Error }) {
	return (
		<Container $pt>
			<h2>Something went wrong!</h2>
			<p>{error.message}</p>
		</Container>
	);
}
