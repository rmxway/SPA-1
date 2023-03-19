import { AnimatePresence, motion, transform, useAnimation } from 'framer-motion';
import { memo, useEffect } from 'react';
import styled from 'styled-components';

import { media } from '@/theme';

const CountStyled = styled(motion.div)`
	position: absolute;
	border-radius: 100%;
	top: -14px;
	right: -10px;
	width: 20px;
	height: 20px;
	background-color: ${(props) => props.theme.colors.dark};
	border: 2px solid ${(props) => props.theme.colors.success};
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	line-height: 1.35;
	letter-spacing: -1px;

	${media.greaterThan('xs')`
        top: -10px;
        right: -12px;
        width: 20px;
        height: 20px;
    `}
`;

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
