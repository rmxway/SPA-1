import { FC } from 'react';
import styled from 'styled-components';

import { Flexbox } from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { changePage } from '@/store/reducers/products';

import { ButtonPagination } from './ButtonPagination';

const Info = styled.div`
	color: ${(props) => props.theme.colors.gray.$6};
`;

const Pagination: FC = () => {
	const { page, total, count } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();
	const countPages = total / count;

	const viewedItems = (): number => {
		if (page * count === total) {
			return total;
		}
		return page * count;
	};

	const AllButtons = (): React.ReactNode[] => {
		const arrButtons: React.ReactNode[] = Array.from({ length: countPages });

		for (let i = 0; i < countPages; i++) {
			const currentPage = i + 1;
			arrButtons[i] = (
				<ButtonPagination
					key={i}
					success={page === currentPage}
					white
					onClick={() => dispatch(changePage(currentPage))}
				>
					{currentPage}
				</ButtonPagination>
			);
		}

		return arrButtons;
	};

	const renderButtons = (): React.ReactNode[] => {
		const arButtons = AllButtons();
		const maxCount = 5;
		const countButtons = countPages >= maxCount ? maxCount : countPages;

		const start = page - 3 < 0 ? 0 : page - 3;
		const end = page <= 2 ? countButtons : page + 2;

		return arButtons.slice(start, end);
	};

	return (
		<>
			<Flexbox align="center" justify="space-between">
				<div>{renderButtons()}</div>
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
