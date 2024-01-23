import type { Metadata } from 'next';

import { ContentFavorites } from './content';

export const metadata: Metadata = {
	title: 'Favorites',
};

export default function FavoritesPage() {
	return <ContentFavorites />;
}
