import { WrapperFavorite } from './styled';

interface FavoriteProps {
	active?: boolean;
	onActive?: () => void;
}

/**
 * Toggled component for favorite product
 * @param {boolean} active
 * @param {function} onActive
 * @returns
 */

export function Favorite({ active = false, onActive, ...props }: FavoriteProps) {
	return (
		<WrapperFavorite {...props} {...{ active }} onClick={onActive}>
			{!active ? <i className="icofont icofont-favorite-fill" /> : <i className="icofont icofont-favorite" />}
		</WrapperFavorite>
	);
}

export default Favorite;
