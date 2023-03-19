import { FC } from 'react';

import { Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { searchProducts } from '@/store/reducers/combineActions';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

const Filter: FC = () => {
	const { currentItems, fetchedItems, search } = useAppSelector(productsStore);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchProducts(e.target.value);
	};

	return (
		<StyledFilter>
			<Flexbox align="center" nowrap>
				<div className="title">Sorting</div>
				<ToggleSort sort="price" value="Price" disabled={!currentItems.length} />
				<ToggleSort sort="rating" value="Rating" disabled={!currentItems.length} />
				<ToggleSort sort="reset" value="Reset" disabled={!currentItems.length} />
			</Flexbox>
			<InputUI
				name="search"
				placeholder="Search"
				className="search-filter"
				value={search.value}
				onChange={handleChange}
				disabled={!currentItems.length && !fetchedItems.length}
			/>
		</StyledFilter>
	);
};

export { Filter };
export default Filter;
