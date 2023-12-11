import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import { Loader } from '@/components/ui';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { fetchingImageProduct } from '@/store/reducers/products';

export const WrapperImageStyled = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 200px;

	text-decoration: none;

	img {
		width: 100%;
		max-height: 500px;
		object-fit: contain;
		object-position: center;
		margin: 20px auto;
		filter: blur(10px);
		opacity: 0;
	}

	@keyframes fetched {
		from {
			filter: blur(10px);
			opacity: 0;
		}
		to {
			filter: blur(0px);
			opacity: 1;
		}
	}

	.fetched {
		animation: fetched 0.3s;
		animation-fill-mode: forwards;
	}
`;

type PropsType = {
	product: IProduct;
	size: number;
};

export const WrapperImage: FC<PropsType> = ({ product, size }) => {
	const dispatch = useAppDispatch();
	const { fetching } = useAppSelector(productsStore);
	const img = (product.images && product.images[0]) || product.thumbnail;

	return (
		<WrapperImageStyled id={`id-${product.id}`}>
			<Loader loading={product.imgFetch} />

			{!fetching && (
				<Image
					src={img}
					alt={product.title}
					width={size}
					height={size}
					quality={60}
					priority
					onLoad={(e) => {
						e.currentTarget.classList.add('fetched');
						dispatch(fetchingImageProduct({ id: Number(product.id), fetch: false }));
					}}
				/>
			)}
		</WrapperImageStyled>
	);
};

export default WrapperImage;
