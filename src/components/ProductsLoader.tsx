import { FC } from 'react';

import { useProductsContext } from './providers/ProductsProvider';
import { Loader } from './ui/Loader';

const ProductsLoader: FC = () => {
	const { loading } = useProductsContext();
	return <Loader loading={loading} />;
};

export { ProductsLoader };
export default ProductsLoader;
