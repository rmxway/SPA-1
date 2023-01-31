import cl from 'classnames';
import React, { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { sortPriceProduct, sortRatingProduct } from '@/store/reducers/products';

import classes from './toggle.module.scss';

interface ComponentTypes {
	value: string;
	sort: keyof IProduct;
}

const ToggleSort: FC<ComponentTypes> = ({ sort, value, ...props }) => {
	const { toggle, name } = useAppSelector((state) => state.products.sort);
	const [checked, setChecked] = useState(false);
	const idName = `sort-${sort}`;
	const dispatch = useAppDispatch();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setChecked((prev) => !prev);

		if (sort !== 'rating') {
			dispatch(sortPriceProduct({ sort, toggle: checked }));
		} else {
			dispatch(sortRatingProduct({ sort, toggle: checked }));
		}
	};

	return (
		<button type="button" className={cl(classes.toggle, { [classes.reverse]: toggle })} onMouseDown={handleClick}>
			<input {...props} type="radio" name="sort" id={idName} defaultChecked={name === sort} />
			<label htmlFor={idName}>
				{value}
				<i className="icofont icofont-arrow-down" />
			</label>
		</button>
	);
};

export { ToggleSort };
export default ToggleSort;
