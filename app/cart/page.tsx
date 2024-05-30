import type { Metadata } from 'next';

import { ContentCart } from '@/modules/cart';

export const metadata: Metadata = {
	title: 'Cart',
};

export default function CartPage() {
	return <ContentCart />;
}
