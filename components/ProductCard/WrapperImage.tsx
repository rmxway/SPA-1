import Image from 'next/image';
import { Fragment, SyntheticEvent } from 'react';

import { Loader } from '@/components/ui';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { fetchingImageProduct } from '@/store/reducers/products';
import { productsStore } from '@/store/types';

import { BlockImgItem, WrapperImagesStyled } from './styled';

type PropsType = {
	product: IProduct;
	size: number;
};

export const WrapperImages = ({ product, size }: PropsType) => {
	const dispatch = useAppDispatch();
	const { fetching } = useAppSelector(productsStore);
	const { id, imgFetch, title, images } = product;

	const handleOnLoad = (e: SyntheticEvent<HTMLImageElement>, idx: number) => {
		e.currentTarget.classList.add('fetched');

		if (idx === 0) {
			dispatch(fetchingImageProduct(Number(id)));
		}
	};

	return (
		<WrapperImagesStyled id={`wrapper-${id}`}>
			<Loader loading={imgFetch ?? true} />

			{!fetching &&
				images?.map((image, idx) => (
					<Fragment key={image}>
						<BlockImgItem />
						<Image
							src={image}
							alt={title}
							width={size}
							height={size}
							quality={60}
							priority
							onLoad={(e) => handleOnLoad(e, idx)}
						/>
					</Fragment>
				))}
		</WrapperImagesStyled>
	);
};

export default WrapperImages;
