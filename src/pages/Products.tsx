import { FC, useEffect, useState } from 'react';

import { Filter, Pagination, ProductsGrid } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { fetchProducts } from '@/service';
import { cartStore, productsStore } from '@/store';
import { storeName } from '@/store/localStore';

// function* runOnce() {
// 	yield fetchProducts({ count: 8 });
// }
// const generator = runOnce();

const ProductsPage: FC = () => {
	const { items: cartItems } = useAppSelector(cartStore);
	const { fetching, error, page, count } = useAppSelector(productsStore);
	const isEmptyCart = !!cartItems.length;
	const [isLocal, setIsLocal] = useState<boolean>(isEmptyCart);

	useEffect(() => {
		// if (!isEmptyCart) generator.next();
		fetchProducts({ count, page });
	}, [page, count]); // isEmptyCart

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
			{error && <LayerBlock mt>{error}</LayerBlock>}

			<Filter />
			<Pagination />

			<ProductsGrid>
				<Loader loading={fetching} />
			</ProductsGrid>
		</>
	);
};

export { ProductsPage };
export default ProductsPage;
