import { FC } from 'react';

import { ProductsGrid } from '@/components/ProductsGrid';
import ProductsProvider from '@/components/providers/ProductsProvider';
// import CreateProductBlock from '@/components/CreateProductBlock';
import { Filter } from '@/components/ui/Filter';

const ProductsPage: FC = () => (
	<ProductsProvider>
		<h1>Products Page</h1>
		{/* <CreateProductBlock addProduct={createProduct} /> */}
		<Filter />
		{/* {error && <div>{error}</div>} */}
		<ProductsGrid />
	</ProductsProvider>
);

export { ProductsPage };
export default ProductsPage;
