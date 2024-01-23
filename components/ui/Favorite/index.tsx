import { Wrapper } from './styled';

interface FavoriteProps {
	active?: boolean;
	onActive?: () => void;
}

export function Favorite({ active = false, onActive, ...props }: FavoriteProps) {
	return (
		<Wrapper {...props} {...{ active }} onClick={onActive}>
			{!active ? <i className="icofont icofont-favorite-fill" /> : <i className="icofont icofont-favorite" />}
		</Wrapper>
	);
}

export default Favorite;
