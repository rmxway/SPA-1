import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/Layout';
import { navbarItems } from '@/mock/navbar';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';

import { TopBlockStyle } from './styled';

export const TopBlock = () => {
	const { title: titleStore } = useAppSelector(productsStore);
	const pathname = usePathname();
	const isMain = pathname === '/';
	const $isFont = isMain || pathname.includes('/product/');

	const getTitle = () => {
		if (titleStore) return titleStore;
		return navbarItems.find((item) => item.url === pathname)?.title;
	};

	return (
		<TopBlockStyle {...{ $isFont }}>
			<Container>
				<LayoutGroup>
					{getTitle() && (
						<motion.h1
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							{isMain ? (
								<>
									Green Shop <span>| Brand</span>
								</>
							) : (
								getTitle()
							)}
						</motion.h1>
					)}
				</LayoutGroup>
			</Container>
		</TopBlockStyle>
	);
};

export default TopBlock;
