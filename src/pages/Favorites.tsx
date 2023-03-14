import { FC } from 'react';

import { Container } from '@/components/Layout';

const FavoritesPage: FC = () => {
	const some = 'text';

	return (
		<Container>
			<h1>Your favorites</h1>
			{some}
		</Container>
	);
};

export { FavoritesPage };
export default FavoritesPage;
