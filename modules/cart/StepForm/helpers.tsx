import { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { InputProps, InputUI, Switcher } from '@/components/ui';
import { OrderFields } from '@/modules/cart/services/schemaOrder';

type InputOrderProps = React.InputHTMLAttributes<HTMLInputElement> & {
	errors: FieldErrors<OrderFields>;
	register: UseFormRegister<OrderFields>;
	placeholder?: string;
} & Pick<InputProps, 'name' | 'mask' | 'label'>;

type SwitcherOrderProps = Omit<InputOrderProps, 'placeholder'>;

export const InputOrder: FC<InputOrderProps> = ({ errors, name, register, ...props }) => (
	<InputUI {...props} error={name && errors[name] && errors[name]?.message} {...{ name }} {...register(name)} />
);

export const SwitchOrder: FC<SwitcherOrderProps> = ({ name, label, errors, register, ...props }) => (
	<Switcher {...props} error={errors[name] && errors[name]?.message} {...{ name, label }} {...register(name)} />
);
