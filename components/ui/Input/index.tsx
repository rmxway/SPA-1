import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

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
	onChange?: (event: { target: { name: string; value: string } }) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, label, mask, error, success, noPadding, className, onChange, ...props }, ref) => (
		<InputWrapper {...{ className }} $error={!!error} $success={success} $noPaddings={noPadding}>
			{label && <Label {...{ label, name }} />}
			{mask ? (
				<IMaskInput
					{...{ name, mask }}
					type="text"
					onAccept={(value) => {
						onChange?.({ target: { name, value } });
					}}
					inputRef={ref}
					{...props}
				/>
			) : (
				<input {...props} {...{ ref, name, onChange }} id={name} type="text" />
			)}

			{error && <ErrorMessage {...{ error }} />}
		</InputWrapper>
	),
);

export default Input;
