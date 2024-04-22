import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Label } from '@/components/ui/Label';
import { OrderFields } from '@/modules/cart/services/schemaOrder';

import { InputWrapper } from './styled';

export interface InputProps {
	label?: string;
	mask?: string;
	name: keyof OrderFields;
	error?: string;
	className?: string;
}

export const InputUI = forwardRef<HTMLInputElement, InputProps>(
	({ name, label, mask, error, className, ...props }, ref) => (
		<InputWrapper {...{ className }}>
			{label && <Label {...{ label, name }} />}
			{mask ? (
				<IMaskInput {...props} {...{ mask, name }} type="text" autoComplete="off" inputRef={ref} />
			) : (
				<input {...props} {...{ ref, name }} id={name} type="text" autoComplete="off" />
			)}

			{error && <ErrorMessage {...{ error }} />}
		</InputWrapper>
	),
);

export default InputUI;
