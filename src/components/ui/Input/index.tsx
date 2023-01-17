import React, { FC } from 'react';

import classes from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}

const InputUI: FC<InputProps> = ({ name, label, ...props }) => (
	<div className={classes.wrapper}>
		{label && <label htmlFor={name}>{label}</label>}

		<input {...props} id={name} type="text" autoComplete="off" />
	</div>
);

export { InputUI };
export default InputUI;
