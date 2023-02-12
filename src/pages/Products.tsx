import { FC, useEffect, useState } from 'react';

import { Filter } from '@/components/Filter';
// import { CreateProductBlock } from '@/components/CreateProductBlock';
import { ProductsGrid } from '@/components/ProductsGrid';
import { ProductsLoader } from '@/components/ProductsLoader';
import { ButtonUI } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { fetchProducts } from '@/service/fetchProducts';
import { storeName } from '@/store/localStore';

function* runOnce() {
	yield fetchProducts(12);
}
const generator = runOnce();

const ProductsPage: FC = () => {
	const { items } = useAppSelector((state) => state.cart);
	const { fetching } = useAppSelector((state) => state.products);
	const isEmptyCart = !!items.length;
	const [isLocal, setIsLocal] = useState<boolean>(isEmptyCart);

	useEffect(() => {
		if (!isEmptyCart) generator.next();
	}, [isEmptyCart]);

	useEffect(() => setIsLocal(isEmptyCart), [isEmptyCart]);

	return (
		<>
			<h1>Products Page</h1>
			<ButtonUI
				success={isLocal}
				onClick={() => {
					localStorage.removeItem(storeName);
					setIsLocal(false);
				}}
			>
				Delete storage
			</ButtonUI>
			{/* <CreateProductBlock addProduct={createProduct} /> */}
			<ProductsLoader load={fetching} />
			{!fetching && (
				<>
					<Filter />
					<ProductsGrid />
				</>
			)}
		</>
	);
};

export { ProductsPage };
export default ProductsPage;
