import { FC } from 'react';

import { useAppSelector } from '@/hooks';

import { Loader } from './ui/Loader';

const ProductsLoader: FC = () => {
	const { fetching } = useAppSelector((state) => state.products);
	return <Loader loading={fetching} />;
};

export { ProductsLoader };
export default ProductsLoader;
