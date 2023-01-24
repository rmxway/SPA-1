import cl from 'classnames';
import React from 'react';

import classes from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	success?: boolean;
	danger?: boolean;
	white?: boolean;
	children: React.ReactNode;
}

const ButtonUI = ({ children, primary, success, danger, white, ...props }: ButtonProps) => (
	<button
		type="button"
		{...props}
		className={cl(classes.button, {
			[classes.primary]: primary,
			[classes.success]: success,
			[classes.danger]: danger,
			[classes.white]: white,
		})}
	>
		{children}
	</button>
);

export { ButtonUI };
export default ButtonUI;
