import { ProductsGrid } from '@/components';
import { Container } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';

const FavoritesPage = () => {
	const { fetchedItems, error, fetching } = useAppSelector(productsStore);
	const favoritesItems = fetchedItems.filter((item) => item.favorite === true);

	return (
		<Container>
			<h1>Your favorites</h1>
			<ProductsGrid {...{ items: favoritesItems, fetching, error }} />
		</Container>
	);
};

FavoritesPage.displayName = 'FavoritePage';

export { FavoritesPage };
export default FavoritesPage;
