import { FC } from 'react';

import { Icon } from '@/components/ui';
import { Icofont } from '@/services';

import { Count } from '../Count';
import { NavCountItemStyled } from './styled';

interface NavCountItemProps {
	title?: Icofont;
	count: number;
}

export const NavCountItem: FC<NavCountItemProps> = ({ title, count }) => (
	<NavCountItemStyled>
		{title && <Icon icon={title} />}
		<Count {...{ count }} />
	</NavCountItemStyled>
);

export default NavCountItem;
