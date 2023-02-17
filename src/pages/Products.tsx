import { FC, useEffect, useState } from 'react';

import { Filter, Pagination, ProductsGrid } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cartStore, productsStore } from '@/store';
import { storeName } from '@/store/localStore';
import { asyncGetProducts } from '@/store/reducers/asyncGetProducts';

const ProductsPage: FC = () => {
	const { items: cartItems } = useAppSelector(cartStore);
	const { fetching, error, page, count } = useAppSelector(productsStore);
	const isEmptyCart = !!cartItems.length;
	const [isLocal, setIsLocal] = useState<boolean>(isEmptyCart);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncGetProducts({ count, page }));
	}, [count, dispatch, page]);

	useEffect(() => setIsLocal(isEmptyCart), [isEmptyCart]);

	return (
		<>
			<h1>Products Page</h1>
			<ButtonUI
				success={isLocal}
				onClick={() => {
					localStorage.setItem(storeName, '');
					setIsLocal(false);
				}}
			>
				Delete storage
			</ButtonUI>

			<Filter />
			<Pagination />

			{error && <LayerBlock>{error}</LayerBlock>}

			<ProductsGrid>
				<Loader loading={fetching} />
			</ProductsGrid>
		</>
	);
};

export { ProductsPage };
export default ProductsPage;
