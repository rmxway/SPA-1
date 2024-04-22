import { currency, useAppSelector } from '@/services';
import { Product, WrapperProducts } from '@/modules/cart/StepForm/styled';
import { cartStore } from '@/store';
import { Flexbox } from '@/components/Layout';
import { FC } from 'react';

export const TableProducts: FC<{ full?: boolean }> = ({ full }) => {
	const { items, totalPrice } = useAppSelector(cartStore);
	return (
		<WrapperProducts $full={full}>
			<Product>
				<div>Title</div>
				<div>Count</div>
				<div>Price</div>
			</Product>
			{items.length &&
				items.map(({ id, title, price, count }) => (
					<Product key={id}>
						<div>{title}</div>
						<div>{count || 1}</div>
						<Flexbox $nowrap $justify="center">
							{currency} {price}
							{count && count > 1 && (
								<>
									&nbsp;<i>({count * price})</i>
								</>
							)}
						</Flexbox>
					</Product>
				))}
			<p>
				Total:{' '}
				<span>
					{currency} {totalPrice}
				</span>
			</p>
		</WrapperProducts>
	);
};
export default TableProducts;
