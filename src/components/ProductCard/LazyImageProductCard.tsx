import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC, useState } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';

import { LazyImage } from '@/components/Layout';
import { useAppDispatch } from '@/hooks';
import { fetchingImageProduct } from '@/store/reducers/products';

interface LazyLoadTypes extends LazyLoadImageProps {
	productId?: number | null;
}

export const LazyImageProductCard: FC<LazyLoadTypes> = ({ productId, ...props }) => {
	const dispatch = useAppDispatch();
	const [error, setError] = useState(false);

	return (
		<LazyImage
			{...props}
			error={error}
			afterLoad={() => dispatch(fetchingImageProduct({ id: Number(productId), fetch: false }))}
			onError={() => setError(true)}
		/>
	);
};

export default LazyImageProductCard;
