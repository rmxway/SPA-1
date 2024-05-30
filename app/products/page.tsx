import { Metadata } from 'next';

import { ContentProducts } from './content';

export const metadata: Metadata = {
	title: 'Products',
};

export default function ProductsPage() {
	return <ContentProducts />;
}
