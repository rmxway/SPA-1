import React, { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { sortProducts } from '@/store/reducers/products';

import { Toggle } from './styled';

interface ComponentTypes extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string;
	sort: 'rating' | 'price' | 'reset';
}

const ToggleSort: FC<ComponentTypes> = ({ sort, value, disabled, ...props }) => {
	const { toggle, name } = useAppSelector(productsStore).sort;
	const [checked, setChecked] = useState(false);
	const idName = `sort-${sort}`;
	const dispatch = useAppDispatch();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setChecked((prev) => !prev);

		dispatch(sortProducts({ sort, toggle: checked }));
	};

	return (
		<Toggle type="button" toggle={toggle} onMouseDown={handleClick} disabled={disabled}>
			<input
				{...props}
				type="radio"
				disabled={disabled}
				name="sort"
				id={idName}
				checked={name === sort}
				onChange={() => null}
			/>
			<label htmlFor={idName}>
				{value}
				<i className="icofont icofont-arrow-down" />
			</label>
		</Toggle>
	);
};

export { ToggleSort };
export default ToggleSort;
