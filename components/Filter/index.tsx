import { Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { debounceFunction } from '@/services/helpers';
import { productsStore } from '@/store';
import { searchProducts, searchValue } from '@/store/reducers/products';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

export function Filter() {
	const { fetchedItems, reservedItems, search } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchText = e.target.value;
		dispatch(searchValue(searchText));
		debounceFunction(() => dispatch(searchProducts(searchText)));
	};

	return (
		<StyledFilter>
			<Flexbox align="center" nowrap>
				<div className="title">Sorting</div>
				<ToggleSort sort="price" value="Price" disabled={!fetchedItems.length} />
				<ToggleSort sort="rating" value="Rating" disabled={!fetchedItems.length} />
				<ToggleSort sort="default" value="Reset" />
			</Flexbox>
			<InputUI
				name="search"
				placeholder="Search"
				className="search-filter"
				value={search.value}
				onChange={handleChange}
				disabled={!reservedItems.length && !fetchedItems.length}
			/>
		</StyledFilter>
	);
}

export default Filter;
