import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { memo, PropsWithChildren } from 'react';

import { Button, ButtonProps } from './styled';

const textVar = {
	hidden: {},
	visible: {
		transition: {
			duration: 0.1,
			staggerChildren: 0.1,
			when: 'afterChildren',
		},
	},
};

const itemVar = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

/**
 * Button with any properties
 * @param w100 - {boolean} width 100%
 * @param inactive - {boolean} pointer-events: none
 * @param margins - {boolean} margin-right and margin-bottom 10px
 * @param |boolean param| - success, danger, primary, white, black
 */

export const ButtonUI = memo(
	({ children, animate = false, ...props }: PropsWithChildren<ButtonProps & { animate?: boolean }>) => {
		const memoText = String(children).split('');
		const randIndex = Number(Math.random() * Number(new Date()));

		return (
			<Button {...props}>
				{animate ? (
					<AnimatePresence initial={false} mode="wait">
						<LayoutGroup key={randIndex}>
							<motion.div layout variants={textVar} initial="hidden" animate="visible" exit="hidden">
								{memoText.map((item) => (
									<motion.span layout variants={itemVar} key={Number(Math.random())}>
										{item}
									</motion.span>
								))}
							</motion.div>
						</LayoutGroup>
					</AnimatePresence>
				) : (
					children
				)}
			</Button>
		);
	},
);

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
