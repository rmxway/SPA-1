import { MotionProps } from 'framer-motion';
import debounce from 'lodash.debounce';

import { Flexbox, Space } from '@/components/Layout';
import { containerVars } from '@/components/ProductsGrid/styled';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { ScrollToTop } from '@/services/helpers';
import { productsStore } from '@/store';
import { changePage } from '@/store/reducers/products';

import { ArrowButton, ButtonPagination, Info, Wrapper } from './styled';

interface PaginationProps extends MotionProps {
	items: IProduct[];
	page: number;
}

export const Pagination = ({ items, page }: PaginationProps) => {
	const total = items.length;

	const { countPerPage, fetching } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();
	const countPages = Math.ceil(total / countPerPage);
	const maxCount = 4;
	const countButtons = countPages >= maxCount ? maxCount : countPages;

	const debounceChangePage = debounce((num) => {
		dispatch(changePage({ page: num }));
		ScrollToTop();
	}, 200);

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
		<Wrapper
			variants={containerVars}
			transition={{ duration: 0.5 }}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{countPages > 1 && (
				<Flexbox align="center">
					{page > 1 && (
						<ArrowButton left onClick={() => debounceChangePage(1)} disabled={fetching || !items.length}>
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
	);
};

export default Pagination;
