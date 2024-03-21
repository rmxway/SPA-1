import { FC } from 'react';

import { BurgerButtonStyled } from './styled';

export const BurgerButton: FC<{ clickBurger(): void; open: boolean }> = ({ clickBurger, open }) => (
	<BurgerButtonStyled $black onClick={clickBurger} $isOpen={open}>
		<span />
		<span />
		<span />
	</BurgerButtonStyled>
);

export default BurgerButton;
