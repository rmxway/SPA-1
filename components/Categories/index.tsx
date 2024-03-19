import { Flexbox } from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { changeCategory } from '@/store/reducers/products';

import { Category } from './styled';

export const Categories = () => {
	const { categories } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	const handleClick = (name: string) => {
		dispatch(changeCategory(name));
	};

	return (
		<Flexbox $justify="flex-start" $gap={4} style={{ marginBottom: '40px' }}>
			{categories.map((category) => (
				<Category
					$active={category.active}
					type="button"
					key={category.name}
					onClick={() => handleClick(category.name)}
				>
					{category.name}
				</Category>
			))}
		</Flexbox>
	);
};
export default Categories;
