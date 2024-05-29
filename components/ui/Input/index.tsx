import React, { forwardRef } from 'react';
import { IMaskInput, ReactElementProps } from 'react-imask';

import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Label } from '@/components/ui/Label';

import { InputWrapper } from './styled';

export interface InputProps {
	label?: string;
	mask?: string;
	name: string;
	error?: string;
	success?: boolean;
	noPadding?: boolean;
	className?: string;
}

type ReactInputProps = ReactElementProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps & React.InputHTMLAttributes<HTMLInputElement>>(
	({ name, label, mask, error, success, noPadding, className, ...props }, ref) => (
		<InputWrapper {...{ className }} $error={!!error} $success={success} $noPaddings={noPadding}>
			{label && <Label {...{ label, name }} />}
			{mask ? (
				<IMaskInput
					{...(props as ReactInputProps)}
					{...{ name, mask }}
					type="text"
					autoComplete="off"
					inputRef={ref}
				/>
			) : (
				<input {...props} {...{ ref, name }} id={name} type="text" autoComplete="off" />
			)}

			{error && <ErrorMessage {...{ error }} />}
		</InputWrapper>
	),
);

export default Input;
