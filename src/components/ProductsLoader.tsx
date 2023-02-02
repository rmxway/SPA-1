import { FC } from 'react';

import { Loader } from './ui/Loader';

const ProductsLoader: FC<{ load: boolean }> = ({ load }) => <Loader loading={load} />;

export { ProductsLoader };
export default ProductsLoader;
