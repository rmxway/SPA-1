import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import { WrapperTextToggle } from './styled';

type TextToggleProps = {
	length?: number;
	children?: ReactNode;
};

export const TextToggle = ({ length = 2, children }: TextToggleProps) => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<WrapperTextToggle $isOpen={isOpen}>
			<motion.div animate={{ height: isOpen ? 'auto' : `${length * 30}px` }} transition={{ duration: 0.2 }}>
				{children}
			</motion.div>
			<button type="button" onClick={handleClick}>
				{isOpen ? 'Скрыть' : 'Показать'}
			</button>
		</WrapperTextToggle>
	);
};

export default TextToggle;
