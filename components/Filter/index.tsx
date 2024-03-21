import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { debounceFunction } from '@/services/helpers';
import { productsStore } from '@/store';
import { searchProducts, searchValue } from '@/store/reducers/products';

import { StyledFilter } from './styled';
import { ToggleSort } from './ToggleSort';

export const Filter: FC<{ isLoading: boolean }> = ({ isLoading }) => {
	const { fetchedItems, reservedItems, search } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchText = e.target.value;
		dispatch(searchValue(searchText));
		debounceFunction(() => dispatch(searchProducts(searchText)));
	};

	return (
		<StyledFilter>
			{isLoading ? (
				<Skeleton inline borderRadius={8} height={40} width={300} />
			) : (
				<InputUI
					name="search"
					placeholder="Search"
					value={search.value}
					onChange={handleChange}
					disabled={!reservedItems.length && !fetchedItems.length}
				/>
			)}

			<Flexbox $align="center" $nowrap $justify="flex-end" $gap={20}>
				{isLoading ? (
					<>
						<Skeleton inline borderRadius={8} height={20} width={70} />
						<Skeleton inline borderRadius={8} height={20} width={80} />
						<Skeleton inline borderRadius={8} height={20} width={50} />
					</>
				) : (
					<>
						<ToggleSort sort="rating" value="Popular" disabled={!fetchedItems.length} />
						<ToggleSort sort="price" value="Price" disabled={!fetchedItems.length} />
						<ToggleSort sort="default" value="Reset" />
					</>
				)}
			</Flexbox>
		</StyledFilter>
	);
};

export default Filter;
