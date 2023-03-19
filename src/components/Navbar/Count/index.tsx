import { AnimatePresence, transform, useAnimation } from 'framer-motion';
import { memo, useEffect } from 'react';

import { CountStyled } from './styled';

interface CountProps {
	count: number | undefined;
}

const Count = memo(({ count }: CountProps) => {
	const controls = useAnimation();
	const velocity = transform([0, 3], [0, 5]);

	useEffect(() => {
		controls.start({
			scale: 1,
			transition: {
				velocity: velocity(Number(count)),
				type: 'spring',
				stiffness: 100,
				damping: 10,
			},
		});
	}, [controls, count, velocity]);

	return (
		<AnimatePresence>
			{count ? (
				<CountStyled animate={controls} exit={{ opacity: 0 }}>
					{count}
				</CountStyled>
			) : null}
		</AnimatePresence>
	);
});

Count.displayName = 'Count';

export { Count };
export default Count;
