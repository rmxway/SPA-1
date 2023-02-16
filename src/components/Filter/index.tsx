import { FC } from 'react';

import { InputUI } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { search } from '@/store/reducers/combineActions';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

const Filter: FC = () => {
	const { value } = useAppSelector(productsStore).search;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		search(e.target.value);
	};

	return (
		<StyledFilter>
			<div className="title">Sorting</div>
			<ToggleSort sort="price" value="Price" />
			<ToggleSort sort="rating" value="Rating" />
			<InputUI
				name="search"
				placeholder="Search"
				className="search-filter"
				value={value}
				onChange={handleChange}
			/>
		</StyledFilter>
	);
};

export { Filter };
export default Filter;
