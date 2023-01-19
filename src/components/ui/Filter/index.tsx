import { FC } from 'react';

import classes from './filter.module.scss';
import { ToggleSort } from './ToggleSort';

const Filter: FC = () => (
	<div className={classes.filter}>
		<div className={classes.title}>Sorting</div>
		<ToggleSort sort="price" value="Price" />
		<ToggleSort sort="rating" value="Rating" />
	</div>
);

export { Filter };
export default Filter;
