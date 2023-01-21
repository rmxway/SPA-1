import { FC } from 'react';

import { CreateProductBlock } from '@/components/CreateProductBlock';
import { ProductsGrid } from '@/components/ProductsGrid';
import { useProductsContext } from '@/components/providers/ProductsProvider';
import { Filter } from '@/components/ui/Filter';

const ProductsPage: FC = () => {
	const { createProduct } = useProductsContext();
	return (
		<>
			<h1>Products Page</h1>
			<CreateProductBlock addProduct={createProduct} />
			<Filter />
			{/* {error && <div>{error}</div>} */}
			<ProductsGrid />
		</>
	);
};

export { ProductsPage };
export default ProductsPage;
