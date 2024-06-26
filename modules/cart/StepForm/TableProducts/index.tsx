import { FC } from 'react';

import { Flexbox } from '@/components/Layout';
import { Product, WrapperProducts } from '@/modules/cart/StepForm/styled';
import { currency, useAppSelector } from '@/services';
import { cartStore } from '@/store/types';

export const TableProducts: FC<{ fGrow?: boolean }> = ({ fGrow }) => {
	const { items, totalPrice } = useAppSelector(cartStore);
	return (
		<WrapperProducts $fGrow={fGrow}>
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
									&nbsp;<span>({count * price})</span>
								</>
							)}
						</Flexbox>
					</Product>
				))}
			<p>
				<span>
					{currency} {totalPrice}
				</span>
			</p>
		</WrapperProducts>
	);
};
export default TableProducts;
