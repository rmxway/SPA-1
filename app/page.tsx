'use client';

import { Container, LayerBlock, MobileWhiteBackground } from '@/components/Layout';
import logos from '@/public/assets/img/logos.jpg';

import { ImageLogos } from './styled';

export function MainPage() {
	return (
		<MobileWhiteBackground>
			<Container $pt>
				<p>
					Simple SPA with fake products. <br />
					Used <code>create-next-app</code> and service{' '}
					<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
						dummyjson.com
					</a>
				</p>
				<ImageLogos src={logos} alt="logos" placeholder="empty" priority />
				<LayerBlock>
					<p>Most used package list:</p>
					<ul>
						<li>React</li>
						<li>Next.js</li>
						<li>Typescript</li>
						<li>Redux Toolkit</li>
						<li>Styled Components</li>
						<li>Swiper</li>
						<li>Framer Motion</li>
						<li>API from dummyjson.com</li>
					</ul>
				</LayerBlock>
			</Container>
		</MobileWhiteBackground>
	);
}

export default MainPage;
