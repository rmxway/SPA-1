import { FC } from 'react';

import { Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { searchProducts } from '@/store/reducers/combineActions';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

const Filter: FC = () => {
	const { items, fetchedItems, search } = useAppSelector(productsStore);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchProducts(e.target.value);
	};

	return (
		<StyledFilter>
			<Flexbox align='center' nowrap>
				<div className="title">Sorting</div>
				<ToggleSort sort="price" value="Price" disabled={!items.length} />
				<ToggleSort sort="rating" value="Rating" disabled={!items.length} />
                <ToggleSort sort="reset" value="Reset" disabled={!items.length} />
			</Flexbox>
			<InputUI
				name="search"
				placeholder="Search"
				className="search-filter"
				value={search.value}
				onChange={handleChange}
				disabled={!items.length && !fetchedItems.length}
			/>
		</StyledFilter>
	);
};

export { Filter };
export default Filter;
