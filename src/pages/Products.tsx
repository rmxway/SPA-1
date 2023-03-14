import { FC, useEffect, useState } from 'react';

import { Filter, Pagination, ProductsGrid } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { Loader } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { productsStore, store } from '@/store';
// import { storeName } from '@/store/localStore';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

function* runOnce() {
	yield store.dispatch(asyncGetAllProducts({}));
}
const generator = runOnce();

const ProductsPage: FC = () => {
	const { fetching, error, items } = useAppSelector(productsStore);
	const isEmptyCart = !!items.length;
	const [isLocal, setIsLocal] = useState<boolean>(isEmptyCart);

	useEffect(() => {
		if (!isLocal) generator.next();
	}, [isLocal]);

	useEffect(() => setIsLocal(isEmptyCart), [isEmptyCart]);

	return (
		<Container mt>
			{/* <ButtonUI
				danger={isLocal}
				onClick={() => {
					localStorage.setItem(storeName, '');
					setIsLocal(false);
				}}
			>
				Delete storage
			</ButtonUI> */}

			<Filter />
			<Pagination />

			{error && <LayerBlock>{error}</LayerBlock>}

			<ProductsGrid {...{ items, fetching, error }}>
				<Loader loading={fetching} />
			</ProductsGrid>
		</Container>
	);
};

export { ProductsPage };
export default ProductsPage;
