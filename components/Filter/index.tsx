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
			<InputUI
				name="search"
				placeholder="Search"
				value={search.value}
				onChange={handleChange}
				disabled={!reservedItems.length && !fetchedItems.length}
			/>
			<Flexbox $align="center" $nowrap $justify="flex-end" $gap={20}>
				<ToggleSort sort="rating" value="Popular" disabled={!fetchedItems.length} />
				<ToggleSort sort="price" value="Price" disabled={!fetchedItems.length} />
				<ToggleSort sort="default" value="Reset" />
			</Flexbox>
		</StyledFilter>
	);
}

export default Filter;
