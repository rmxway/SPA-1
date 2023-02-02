import { FC, useMemo } from 'react';

import { Filter } from '@/components/Filter';
// import { CreateProductBlock } from '@/components/CreateProductBlock';
import { ProductsGrid } from '@/components/ProductsGrid';
import { ProductsLoader } from '@/components/ProductsLoader';
import { useAppSelector } from '@/hooks';
import { fetchProducts } from '@/service/fetchProducts';

function* runOnce() {
	yield fetchProducts(8);
}
const generator = runOnce();

const ProductsPage: FC = () => {
	useMemo(() => {
		generator.next();
	}, []);

	const { fetching } = useAppSelector((state) => state.products);

	return (
		<>
			<h1>Products Page</h1>
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
