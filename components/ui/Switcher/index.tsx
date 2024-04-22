import { forwardRef } from 'react';

import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Label } from '@/components/ui/Label';
import { WrapperSwitcher } from '@/components/ui/Switcher/styled';

interface SwitcherProps {
	name: string;
	label?: string;
	error?: string;
}

export const Switcher = forwardRef<HTMLInputElement, SwitcherProps>(({ name, label, error, ...props }, ref) => (
	<WrapperSwitcher>
		{label && <Label name="switcher" {...{ label }} />}
		<input name={name} id={name} type="checkbox" {...{ ref }} {...props} />
		<label htmlFor={name} />
		{error && <ErrorMessage {...{ error }} />}
	</WrapperSwitcher>
));

export default Switcher;
