'use client';

import { Container, LayerBlock } from '@/components/Layout';
import forest from '@/public/assets/img/forest.jpg';
import logos from '@/public/assets/img/logos.jpg';

import { ImageForest, ImageLogos } from './styled';

export default function MainPage() {
	return (
		<>
			<ImageForest
				src={forest}
				placeholder="blur"
				blurDataURL={`./${forest.blurDataURL}`}
				alt="forest"
				quality={60}
				priority
			/>
			<Container $pt>
				<LayerBlock $fixedPadding>
					<p>
						Simple SPA with fake products. <br />
						Used <code>create-next-app</code> and service{' '}
						<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
							dummyjson.com
						</a>
					</p>
					<ImageLogos
						src={logos}
						placeholder="blur"
						blurDataURL={`./${logos.blurDataURL}`}
						alt="logos"
						quality={60}
						priority
					/>
				</LayerBlock>

				<LayerBlock $fixedPadding>
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
		</>
	);
}
