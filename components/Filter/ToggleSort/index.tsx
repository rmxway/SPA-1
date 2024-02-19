import React, { FC, useState } from 'react';

import { Icon } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { sortProducts } from '@/store/reducers/products';

import { Toggle } from './styled';

interface ComponentTypes extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string;
	sort: 'rating' | 'price' | 'default';
}

const ToggleSort: FC<ComponentTypes> = ({ sort, value, disabled, ...props }) => {
	const { name, toggle } = useAppSelector(productsStore).sort;
	const [checked, setChecked] = useState(false);
	const idName = `sort-${sort}`;
	const dispatch = useAppDispatch();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();

		if (sort === 'default') {
			dispatch(sortProducts({ name: sort }));
			return;
		}

		setChecked((prev) => !prev);
		dispatch(sortProducts({ name: sort, toggle: !checked }));
	};

	return (
		<Toggle type="button" toggle={toggle} onMouseDown={handleClick} disabled={disabled}>
			<input
				{...props}
				type="radio"
				disabled={disabled}
				name="sort"
				id={idName}
				checked={name !== 'default' && name === sort}
				onChange={() => null}
			/>
			<label htmlFor={idName}>
				{value}
				<Icon icon="arrow-down" />
			</label>
		</Toggle>
	);
};

export { ToggleSort };
export default ToggleSort;
