import { FC } from 'react';

import { IProduct } from '@/interfaces';

import { Product } from './Product';
import { ProductsLoader } from './ProductsLoader';
import { useProductsContext } from './providers/ProductsProvider';

const ProductsGrid: FC = () => {
	const { products, addToCard } = useProductsContext();

	return (
		<div className="products-wrapper">
			<ProductsLoader />
			{products &&
				products.map((product: IProduct, index) => (
					<Product product={product} key={product.id} addToCard={addToCard} index={index} />
				))}
		</div>
	);
};

export { ProductsGrid };
export default ProductsGrid;
