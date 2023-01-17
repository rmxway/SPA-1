import { FC } from 'react';

import classes from './filter.module.scss';
import { ToggleSort } from './ToggleSort';

const Filter: FC = () => (
	<div className={classes.filter}>
		<div className={classes.title}>Sorting</div>
		<ToggleSort sort="price">Price</ToggleSort>
        <ToggleSort sort="rating">Rating</ToggleSort>
	</div>
);

export { Filter };
export default Filter;
