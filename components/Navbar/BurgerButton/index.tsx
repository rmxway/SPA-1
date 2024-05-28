import { FC } from 'react';

import { BurgerButtonStyled } from './styled';

interface BurgerButtonProps {
	clickBurger: () => void;
	open: boolean;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ clickBurger, open }) => (
	<BurgerButtonStyled $success onClick={clickBurger} $isOpen={open}>
		<span />
		<span />
		<span />
	</BurgerButtonStyled>
);

export default BurgerButton;
