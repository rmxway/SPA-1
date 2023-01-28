import cl from 'classnames';
import { FC, useState } from 'react';

// import { useProductsContext } from '@/components/providers/ProductsProvider';
import { IProduct } from '@/interfaces';

import classes from './toggle.module.scss';

interface ComponentTypes {
	value: string;
	sort: keyof IProduct;
}

const ToggleSort: FC<ComponentTypes> = ({ sort, value, ...props }) => {
	// const { sortProduct, sortRatingProduct } = useProductsContext();
	const [toggle, setToggle] = useState(false);
	const idName = `sort-${sort}`;

	const handleClick = () => {
		setToggle((prev) => !prev);
		// if (sort !== 'rating') {
		// 	sortProduct(sort, toggle);
		// } else {
		// 	sortRatingProduct(toggle);
		// }
	};

	return (
		<button type="button" className={cl(classes.toggle, { [classes.reverse]: toggle })} onMouseDown={handleClick}>
			<input {...props} type="radio" name="sort" id={idName} />
			<label htmlFor={idName}>
				{value}
				<i className="icofont icofont-arrow-down" />
			</label>
		</button>
	);
};

export { ToggleSort };
export default ToggleSort;
