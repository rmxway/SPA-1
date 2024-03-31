'use client';

import React, { useRef } from 'react';

import { Icon } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { sortProducts } from '@/store/reducers/products';

import { Toggle } from './styled';

interface ComponentTypes extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string;
	sort: 'rating' | 'price' | 'default';
	onClick?: () => void;
}

const ToggleSort = ({ sort, value, disabled, onClick, ...props }: ComponentTypes) => {
	const { sort: productsSort, search, categories } = useAppSelector(productsStore);
	const checked = useRef(false);
	const idName = `sort-${sort}`;
	const dispatch = useAppDispatch();

	const handleClick = () => {
        onClick?.();

		if (sort === 'default' && productsSort.name === sort && search.value === '' && categories[0].active) return;

		if (sort === 'default') {
			dispatch(sortProducts({ name: sort }));
			return;
		}

		checked.current = !checked.current;
		dispatch(sortProducts({ name: sort, toggle: checked.current }));
	};

	return (
		<Toggle type="button" $toggle={productsSort.toggle} onMouseDown={handleClick} disabled={disabled}>
			<input
				type="radio"
				disabled={disabled}
				name="sort"
				id={idName}
				checked={productsSort.name !== 'default' && productsSort.name === sort}
				onChange={() => null}
				{...props}
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
