import debounce from 'lodash.debounce';

import { Flexbox, Space } from '@/components/Layout';
import { IProduct, useAppDispatch } from '@/services';
import { changePage, TypePages } from '@/store/reducers/products';

import { ButtonPagination } from './ButtonPagination';
import { ArrowButton, Info, Wrapper } from './styled';

interface PaginationProps {
	items: IProduct[];
	fetching: boolean;
	page: number;
	countPerPage: number;
	keyChangePage: TypePages;
}

export function Pagination({ items, fetching, page, countPerPage, keyChangePage }: PaginationProps) {
	const total = items.length;
	const dispatch = useAppDispatch();
	const countPages = Math.ceil(total / countPerPage);
	const maxCount = 4;
	const countButtons = countPages >= maxCount ? maxCount : countPages;

	const debounceChangePage = debounce((num) => dispatch(changePage({ key: keyChangePage, page: num })), 100);

	const viewedItems = (): number => {
		if (!(total % countPerPage)) {
			return total;
		}
		if (countPages !== page) {
			return page * countPerPage;
		}
		return total;
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
					disabled={!items.length}
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
		const end = page <= 2 ? countButtons : page + 1;

		return arButtons.slice(start, end);
	};

	return (
		<>
			<Wrapper>
				{countPages > 1 && (
					<Flexbox align="center">
						{page > 1 && (
							<ArrowButton
								left
								onClick={() => debounceChangePage(1)}
								disabled={fetching || !items.length}
							>
								<i className="icofont icofont-arrow-down" /> To begin
							</ArrowButton>
						)}
						{renderButtons()}

						{page < countPages && page !== countPages && (
							<ArrowButton
								right
								onClick={() => debounceChangePage(countPages)}
								disabled={fetching || !items.length}
							>
								To end <i className="icofont icofont-arrow-down" />
							</ArrowButton>
						)}
					</Flexbox>
				)}
				<br />
				<Space />
				{!!items.length && (
					<Info>
						Shown products: {viewedItems()} from {total}
					</Info>
				)}
			</Wrapper>
			<br />
		</>
	);
}

export default Pagination;
