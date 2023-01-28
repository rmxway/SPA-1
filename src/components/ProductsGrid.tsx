import { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store/store';

import { Product } from './Product';
import { ProductsLoader } from './ProductsLoader';

const ProductsGrid: FC = () => {
	const { items } = useAppSelector(productsStore);

	return (
		<div className="products-wrapper">
			<ProductsLoader />
			{items &&
				items.map((product: IProduct, index) => <Product product={product} key={product.id} index={index} />)}
		</div>
	);
};

export { ProductsGrid };
export default ProductsGrid;
