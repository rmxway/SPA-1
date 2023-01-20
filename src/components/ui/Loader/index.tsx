import { FC } from 'react';

import classes from './loader.module.scss';

interface LoaderTypes {
	loading: boolean;
}

const Loader: FC<LoaderTypes> = ({ loading }) =>
	loading ? (
		<div className={classes.wrapper}>
			<div className={classes.loader} />
		</div>
	) : null;

export { Loader };
export default Loader;
