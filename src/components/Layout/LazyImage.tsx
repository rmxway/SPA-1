import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

interface LazyImageType extends LazyLoadImageProps {
	error?: boolean;
}

const LazyImage: FC<LazyImageType> = ({ error, ...props }) => (
	<>
		{error && <i className="icofont icofont-nophoto" />}
		{!error && <LazyLoadImage effect="blur" {...props} />}
	</>
);

export { LazyImage };
export default LazyImage;
