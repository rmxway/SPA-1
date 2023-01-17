import cl from 'classnames';
import React from 'react';

import classes from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	success?: boolean;
	danger?: boolean;
	white?: boolean;
	children: React.ReactNode;
}

const ButtonUI = ({ children, success, danger, white, ...props }: ButtonProps) => (
	<button
		type="button"
		{...props}
		className={cl(classes.button, {
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
