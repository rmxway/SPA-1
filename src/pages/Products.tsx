import { FC } from 'react';

// import { CreateProductBlock } from '@/components/CreateProductBlock';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Filter } from '@/components/ui/Filter';

const ProductsPage: FC = () => (
	<>
		<h1>Products Page</h1>
		{/* <CreateProductBlock addProduct={createProduct} /> */}
		<Filter />
		<ProductsGrid />
	</>
);

export { ProductsPage };
export default ProductsPage;
