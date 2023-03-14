import { FC } from 'react';

import { Wrapper } from './styled';

interface FavoriteProps {
	active?: boolean;
	onActive?: () => void;
}

const Favorite: FC<FavoriteProps> = ({ active = false, onActive, ...props }) => (
	<Wrapper {...props} {...{ active }} onClick={onActive}>
		{active ? <i className="icofont icofont-favorite-fill" /> : <i className="icofont icofont-favorite" />}
	</Wrapper>
);

export { Favorite };
export default Favorite;
