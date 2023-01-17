import { FC } from 'react';

import { IProduct } from '@/interfaces';

import { Product } from './Product';
import { useProductsContext } from './providers/ProductsProvider';

const ProductsGrid: FC = () => {
	const { products, deleteProduct } = useProductsContext();

	return (
		<div className="products-wrapper">
			{products &&
				products.map((product: IProduct, index) => (
					<Product product={product} key={product.id} delProduct={deleteProduct} index={index} />
				))}
		</div>
	);
};

export { ProductsGrid };
export default ProductsGrid;
