import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

const LazyImage: FC<LazyLoadImageProps> = (props) => <LazyLoadImage {...props} />;

export { LazyImage };
export default LazyImage;
