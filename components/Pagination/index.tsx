import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { MotionProps } from 'framer-motion';
import debounce from 'lodash.debounce';
import { forwardRef, Ref } from 'react';

import { Flexbox, Space } from '@/components/Layout';
import { containerVars } from '@/components/ProductsGrid/styled';
import { Icon } from '@/components/ui';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { ScrollToTop } from '@/services/helpers';
import { productsStore } from '@/store';

import { ArrowButton, ButtonPagination, Info, Wrapper } from './styled';

interface PaginationProps extends MotionProps {
	items: IProduct[];
	countPerPage: number;
	page: number;
	changePage: ActionCreatorWithPayload<number, string>;
}

export const Pagination = forwardRef(
	({ items, countPerPage, page, changePage, ...props }: PaginationProps, ref: Ref<HTMLDivElement>) => {
		const { fetching } = useAppSelector(productsStore);
		const dispatch = useAppDispatch();
		const total = items.length;
		const countPages = Math.ceil(total / countPerPage);
		const maxButtonsCount = 4;
		const countButtons = countPages >= maxButtonsCount ? maxButtonsCount : countPages;

		const debounceChangePage = debounce((num) => {
			dispatch(changePage(num));
			ScrollToTop();
		}, 200);

		const viewedItems = (): number => {
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
						$success={page === currentPage}
						$inactive={fetching}
						onClick={() => debounceChangePage(currentPage)}
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
			<Wrapper variants={containerVars} initial="hidden" animate="visible" exit="hidden" {...{ ref }} {...props}>
				{countPages > 1 && (
					<Flexbox $align="center">
						{page > 1 && (
							<ArrowButton
								$left
								onClick={() => debounceChangePage(1)}
								disabled={fetching || !items.length}
							>
								<Icon icon="arrow-down" /> To begin
							</ArrowButton>
						)}

						{renderButtons()}

						{page < countPages && page !== countPages && (
							<ArrowButton
								$right
								onClick={() => debounceChangePage(countPages)}
								disabled={fetching || !items.length}
							>
								To end <Icon icon="arrow-down" />
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
	},
);

export default Pagination;
