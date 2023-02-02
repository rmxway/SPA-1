import { FC, useMemo } from 'react';

// import { CreateProductBlock } from '@/components/CreateProductBlock';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Filter } from '@/components/ui/Filter';
import { fetchProducts } from '@/service/fetchProducts';

function* runOnce() {
    yield fetchProducts(8);
};
const generator = runOnce();

const ProductsPage: FC = () => {
	useMemo(() => {
        generator.next();
	}, []);

	return (
		<>
			<h1>Products Page</h1>
			{/* <CreateProductBlock addProduct={createProduct} /> */}
			<Filter />
			<ProductsGrid />
		</>
	);
};

export { ProductsPage };
export default ProductsPage;
