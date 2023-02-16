import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC, useState } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

const LazyImage: FC<LazyLoadImageProps> = (props) => {
	const [error, setError] = useState(false);

	return (
		<>
			{error && <i className="icofont icofont-nophoto" />}
			{!error && <LazyLoadImage effect="blur" {...props} onError={() => setError(true)} />}
		</>
	);
};

export { LazyImage };
export default LazyImage;
