import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

import { ButtonStyle, Props } from './styled';

const textVar = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

/**
 * Custom button with some properties.
 ** Необходимо доработать анимацию
 * @param {?boolean} $w100 - width 100%
 * @param {?boolean} $inactive - pointer-events: none
 * @param {?boolean} $animate - animate inner text (not working)
 * @param {?boolean} $margins - margin-right and margin-bottom 10px
 * @param {?boolean} (styled boolean params) - $success, $danger, $primary, $white, $black
 */

export const Button: FC<Props & { $animate?: boolean }> = ({ children, $animate = false, ...props }) => {
	const memoText = String(children).split('');

	return (
		<ButtonStyle {...props}>
			{$animate ? (
				<AnimatePresence mode="wait">
					<motion.div layout variants={textVar} initial="hidden" animate="visible" exit="hidden">
						{memoText.map((item, idx) => (
							<motion.span
								layout
								variants={textVar}
								transition={{ delay: 0.1 * idx }}
								key={Number(Math.random())}
							>
								{item}
							</motion.span>
						))}
					</motion.div>
				</AnimatePresence>
			) : (
				children
			)}
		</ButtonStyle>
	);
};

export default Button;
