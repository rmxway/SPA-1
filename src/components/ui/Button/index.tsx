import { AnimatePresence, LayoutGroup, motion, MotionProps } from 'framer-motion';
import { forwardRef, ForwardRefExoticComponent, memo, PropsWithChildren, Ref } from 'react';

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

type Props = PropsWithChildren<ButtonProps> & MotionProps & { animate?: boolean };
type MElement = any;

const ForwardedButton: ForwardRefExoticComponent<MElement> = forwardRef(
	({ children, ...props }: Props, ref: Ref<MElement>) => (
		<Button {...props} ref={ref}>
			{children}
		</Button>
	)
);

ForwardedButton.displayName = 'MButtonUI';

const MButtonUI = motion(ForwardedButton);

const ButtonUI = memo(({ children, animate = false, ...props }: Props) => {
	const memoText = String(children).split('');
	const randIndex = Number(Math.random() * Number(new Date()));

	return (
		<MButtonUI {...props} whileTap={{ scale: 0.98 }} transition={{ duration: 0.1 }}>
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
		</MButtonUI>
	);
});

ButtonUI.displayName = 'ButtonUI';

export { ButtonUI };
export default ButtonUI;
