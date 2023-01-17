import React, { FC } from 'react';

import { useProductsContext } from '@/components/providers/ProductsProvider';
import { IProduct } from '@/interfaces';

import classes from './toggle.module.scss';

interface ComponentTypes {
	children: React.ReactNode;
	sort: keyof IProduct;
}

const ToggleSort: FC<ComponentTypes> = ({ children, sort, ...props }) => {
	const { sortPriceProduct, sortRatingProduct } = useProductsContext();
	const handleClick = () => {
		if (sort === 'price') sortPriceProduct(sort);
		if (sort === 'rating') sortRatingProduct(sort);
	};

	return (
		<button type="button" className={classes.toggle} onClick={handleClick} {...props}>
			{children}
		</button>
	);
};

export { ToggleSort };
export default ToggleSort;
