import * as React from 'react';
import cl from 'classnames';
import classes from './button.module.scss';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	success?: Boolean;
	danger?: Boolean;
	white?: Boolean;
	children: React.ReactNode;
}

export default function ButtonUI({
	children,
	success,
	danger,
	white,
	...props
}: ButtonProps) {
	return (
		<button
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
}
