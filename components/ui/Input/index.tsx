import React from 'react';

import { InputWrapper } from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}

export function InputUI({ name, label, className, ...props }: InputProps) {
	return (
		<InputWrapper className={className}>
			{label && <label htmlFor={name}>{label}</label>}

			<input {...props} id={name} type="text" autoComplete="off" />
		</InputWrapper>
	);
}

export default InputUI;
