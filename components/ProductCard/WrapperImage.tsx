import Image from 'next/image';
import { FC, Fragment, SyntheticEvent } from 'react';

import { Loader } from '@/components/ui';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { fetchingImageProduct } from '@/store/reducers/products';

import { BlockImgItem, WrapperImagesStyled } from './styled';

type PropsType = {
	product: IProduct;
	size: number;
};

export const WrapperImages: FC<PropsType> = ({ product, size }) => {
	const dispatch = useAppDispatch();
	const { fetching } = useAppSelector(productsStore);

	const handleOnLoad = (e: SyntheticEvent<HTMLImageElement>, idx: number) => {
		e.currentTarget.classList.add('fetched');

		if (idx === 0) {
			dispatch(fetchingImageProduct({ id: Number(product.id), fetch: false }));
		}
	};

	return (
		<WrapperImagesStyled id={`wrapper-${product.id}`}>
			<Loader loading={product.imgFetch} />

			{!fetching &&
				product.images?.map((image, idx) => (
					<Fragment key={image}>
						<BlockImgItem />
						<Image
							src={image}
							alt={product.title}
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
