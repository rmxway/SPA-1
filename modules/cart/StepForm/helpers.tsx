import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Input, InputProps, Switcher } from '@/components/ui';
import { OrderFields } from '@/modules/cart/services/schemaOrder';

type DirtyFields = Partial<Record<keyof OrderFields, boolean>>;

interface WithErrorProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errors: FieldErrors<OrderFields>;
	dirtyFields: DirtyFields;
	register: UseFormRegister<OrderFields>;
	name: keyof OrderFields;
}
type InputOrderProps = Pick<InputProps, 'mask' | 'label'> & WithErrorProps;
type SwitcherOrderProps = Omit<InputOrderProps, 'placeholder'>;
type ComponentType = typeof Input | typeof Switcher;

function FormField<T extends WithErrorProps>(Component: ComponentType) {
	return ({ errors, name, register, dirtyFields, ...props }: T) => {
		const error = name && errors && errors[name] && errors[name]?.message;
		const success = !error && dirtyFields[name];
		const successNeeded = () => {
			if (name !== 'toApartment') {
				return { success };
			}
			return null;
		};
		return <Component {...props} {...{ name, error }} {...successNeeded()} {...register(name)} />;
	};
}

export const InputOrder = FormField<InputOrderProps>(Input);
export const SwitchOrder = FormField<SwitcherOrderProps>(Switcher);
