import { FC, useEffect, useState } from 'react';

import { Filter, ProductsGrid } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { productsStore, store } from '@/store';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

function* runOnce() {
	yield store.dispatch(asyncGetAllProducts({}));
}
const generator = runOnce();

const ProductsPage: FC = () => {
	const { fetching, error, fetchedItems, page } = useAppSelector(productsStore);

	const isEmptyCart = !!fetchedItems.length;
	const [isLocal, setIsLocal] = useState<boolean>(isEmptyCart);

	useEffect(() => {
		if (!isLocal) generator.next();
	}, [isLocal]);

	useEffect(() => setIsLocal(isEmptyCart), [isEmptyCart]);

	return (
		<Container mt>
			<Filter />

			{error && <LayerBlock>{error}</LayerBlock>}

			<ProductsGrid pagination items={fetchedItems} keyPage="page" {...{ fetching, error, page }} />
		</Container>
	);
};

export { ProductsPage };
export default ProductsPage;
