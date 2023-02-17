import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';

import { LazyImage } from '@/components/Layout';
import { useAppDispatch } from '@/hooks';
import { fetchingImageProduct } from '@/store/reducers/products';

interface LazyLoadTypes extends LazyLoadImageProps {
	productId?: number | null;
}

const LazyImageProductCard: FC<LazyLoadTypes> = ({ productId, ...props }) => {
	const dispatch = useAppDispatch();

	return (
		<LazyImage
			{...props}
			afterLoad={() => dispatch(fetchingImageProduct({ id: Number(productId), fetch: false }))}
			onError={() => {
				dispatch(fetchingImageProduct({ id: Number(productId), fetch: false }));
			}}
		/>
	);
};

export { LazyImageProductCard };
export default LazyImageProductCard;
