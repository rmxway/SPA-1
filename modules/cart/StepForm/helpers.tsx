import { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { InputProps, InputUI, Switcher } from '@/components/ui';
import { OrderFields } from '@/modules/cart/services/schemaOrder';

interface WithErrorProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errors: FieldErrors<OrderFields>;
	register: UseFormRegister<OrderFields>;
	name: keyof OrderFields;
}
type InputOrderProps = Pick<InputProps, 'mask' | 'label'> & WithErrorProps;
type SwitcherOrderProps = Omit<InputOrderProps, 'placeholder'>;

// TODO: доработать типы и создать HOC
export const InputOrder: FC<InputOrderProps> = ({ errors, name, register, ...props }) => {
	const error = name && errors && errors[name] && errors[name]?.message;
	return <InputUI {...props} {...{ name, error }} {...register(name)} />;
};

export const SwitchOrder: FC<SwitcherOrderProps> = ({ errors, name, register, ...props }) => {
	const error = name && errors && errors[name] && errors[name]?.message;
	return <Switcher {...props} {...{ name, error }} {...register(name)} />;
};
