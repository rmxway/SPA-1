import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import { WrapperTextToggle } from './styled';

type TextToggleProps = {
	length?: number;
	children?: ReactNode;
};

export const TextToggle = ({ length = 2, children }: TextToggleProps) => {
	const [isOpen, setOpen] = useState(false);

	const height = `${length * 30}px`;

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<WrapperTextToggle $isOpen={isOpen}>
			<motion.div style={{ height }} animate={{ height: isOpen ? 'auto' : height }}>
				{children}
			</motion.div>
			<button type="button" onClick={handleClick}>
				{isOpen ? 'Скрыть' : 'Показать'}
			</button>
		</WrapperTextToggle>
	);
};

export default TextToggle;
