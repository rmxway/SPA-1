import React, { FC, useState } from 'react';

import { useProductsContext } from '@/components/providers/ProductsProvider';
import { IProduct } from '@/interfaces';

import classes from './toggle.module.scss';

interface ComponentTypes {
	children: React.ReactNode;
	sort: keyof IProduct;
}

const ToggleSort: FC<ComponentTypes> = ({ children, sort, ...props }) => {
	const { sortProduct, sortRatingProduct } = useProductsContext();
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle((prev) => !prev);
		if (sort !== 'rating') {
			sortProduct(sort, toggle);
		} else sortRatingProduct(toggle);
	};

	return (
		<button type="button" className={classes.toggle} onClick={handleClick} {...props}>
			{children} {toggle ? '>>' : '<<'}
		</button>
	);
};

export { ToggleSort };
export default ToggleSort;
