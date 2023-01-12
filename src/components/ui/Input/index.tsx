import React, { FC } from 'react';
import classes from './input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	value: any;
}

const InputUI: FC<InputProps> = ({ name, label, ...props }) => {
	return (
		<div className={classes.wrapper}>
			{label && <label htmlFor={name}>{label}</label>}
			<input {...props} id={name} type="text" autoComplete="off" />
		</div>
	);
};

export default InputUI;
