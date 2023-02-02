import React from 'react';

import { Button } from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	success?: boolean;
	danger?: boolean;
	white?: boolean;
	w100?: boolean;
	children: React.ReactNode;
}

const ButtonUI = ({ children, ...props }: ButtonProps) => (
	<Button type="button" {...props}>
		{children}
	</Button>
);

export { ButtonProps, ButtonUI };
export default ButtonUI;
