import { FC } from 'react';

import { StyledLoader, Wrapper } from './styled';

interface LoaderTypes {
	loading: boolean;
}

const Loader: FC<LoaderTypes> = ({ loading }) =>
	loading ? (
		<Wrapper>
			<StyledLoader />
		</Wrapper>
	) : null;

export { Loader };
export default Loader;
