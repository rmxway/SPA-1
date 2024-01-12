import { FC } from 'react';

import { Count } from '../Count';
import { NavCountItemStyled } from './styled';

type NavCountItemType = 'cart' | 'favorite-fill';

interface NavCountItemProps {
	title?: NavCountItemType;
	count: number;
}

export const NavCountItem: FC<NavCountItemProps> = ({ title, count }) => {
	return (
		<NavCountItemStyled>
			<i className={`icofont icofont-${title?.toLowerCase()}`} />
			{!!count && <Count {...{ count }} />}
		</NavCountItemStyled>
	);
};

export default NavCountItem;
