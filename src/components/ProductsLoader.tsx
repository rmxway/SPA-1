import React, { FC } from 'react';

import { useProductsContext } from './providers/ProductsProvider';

const ProductsLoader: FC = () => {
	const { loading } = useProductsContext();
	return loading ? <div>Loading...</div> : null;
};

export { ProductsLoader };
export default ProductsLoader;
