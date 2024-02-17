import { Icon } from '@/components/ui/Icon';

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
			<Icon icon={active ? 'favorite' : 'favorite-fill'} />
		</WrapperFavorite>
	);
}

export default Favorite;
