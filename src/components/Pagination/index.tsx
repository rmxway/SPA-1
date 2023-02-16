import debounce from 'lodash.debounce';
import { FC } from 'react';

import { Flexbox } from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { changePage } from '@/store/reducers/products';

import { ButtonPagination } from './ButtonPagination';
import { ArrowButton, Info } from './styled';

const Pagination: FC = () => {
	const { page, total, count, fetching } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();
	const countPages = total / count;
	const maxCount = 5;
	const countButtons = countPages >= maxCount ? maxCount : countPages;

	const viewedItems = (): number => {
		if (page * count === total) {
			return total;
		}
		return page * count;
	};

	const debounceChangePage = debounce((num) => dispatch(changePage(num)), 200);

	const handleChangePage = (sing: string) => {
		const num = sing === 'add' ? page + 1 : page - 1;
		debounceChangePage(num);
	};

	const AllButtons = (): React.ReactNode[] => {
		const arrButtons: React.ReactNode[] = Array.from({ length: countPages });

		for (let i = 0; i < countPages; i++) {
			const currentPage = i + 1;
			arrButtons[i] = (
				<ButtonPagination
					key={i}
					success={page === currentPage}
					onClick={() => debounceChangePage(currentPage)}
					inactive={fetching}
				>
					{currentPage}
				</ButtonPagination>
			);
		}

		return arrButtons;
	};

	const renderButtons = (): React.ReactNode[] => {
		const arButtons = AllButtons();

		const start = page - 3 < 0 ? 0 : page - 3;
		const end = page <= 2 ? countButtons : page + 2;

		return arButtons.slice(start, end);
	};

	return (
		<>
			<Flexbox align="center" justify="space-between">
				<Flexbox align="center">
					{page > 1 && (
						<ArrowButton left type="button" onClick={() => handleChangePage('remove')} disabled={fetching}>
							<i className="icofont icofont-arrow-down" />
						</ArrowButton>
					)}
					{renderButtons()}

					{page < countPages && page !== countPages && (
						<ArrowButton right type="button" onClick={() => handleChangePage('add')} disabled={fetching}>
							<i className="icofont icofont-arrow-down" />
						</ArrowButton>
					)}
				</Flexbox>
				<Info>
					Shown products: {viewedItems()} from {total}
				</Info>
			</Flexbox>
			<br />
		</>
	);
};

export { Pagination };
export default Pagination;
