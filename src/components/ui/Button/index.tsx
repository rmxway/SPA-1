import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { Button, ButtonProps } from './styled';

const textVar = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ButtonUI = ({ children, ...props }: PropsWithChildren<ButtonProps & MotionProps>) => (
	<Button whileTap={{ scale: 0.98 }} transition={{ duration: 0.1 }} {...props}>
		<AnimatePresence initial={false}>
			{!!children && (
				<motion.div variants={textVar} initial="hidden" animate="visible" exit="hidden">
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	</Button>
);

export { ButtonUI };
export default ButtonUI;
