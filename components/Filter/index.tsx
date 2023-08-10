import { Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { searchProduct } from '@/store/reducers/products';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

export function Filter() {
	const { currentItems, fetchedItems, search } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(searchProduct(e.target.value));
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
}

export default Filter;
