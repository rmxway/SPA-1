import React, { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { sortPriceProduct, sortRatingProduct } from '@/store/reducers/products';

import { Toggle } from './styled';

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
		<Toggle type="button" toggle={toggle} onMouseDown={handleClick}>
			<input {...props} type="radio" name="sort" id={idName} checked={name === sort} onChange={() => null} />
			<label htmlFor={idName}>
				{value}
				<i className="icofont icofont-arrow-down" />
			</label>
		</Toggle>
	);
};

export { ToggleSort };
export default ToggleSort;
