import Image from 'next/image';
import { Fragment, SyntheticEvent, useState } from 'react';

import { Loader } from '@/components/ui';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store/types';

import { BlockImgItem, WrapperImagesStyled } from './styled';

type PropsType = {
	product: IProduct;
	size: number;
};

export const WrapperImages = ({ product, size }: PropsType) => {
	const [isLoad, setIsLoad] = useState(true);
	const { fetching } = useAppSelector(productsStore);
	const { id, title, images } = product;

	const handleOnLoad = (e: SyntheticEvent<HTMLImageElement>, idx: number) => {
		e.currentTarget.classList.add('fetched');

		if (idx === 0) {
			setIsLoad(false);
		}
	};

	return (
		<WrapperImagesStyled id={`wrapper-${id}`}>
			<Loader loading={isLoad} />

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
