'use client';

import Image from 'next/image';

import { Container, Flexbox, LayerBlock } from '@/components/Layout';
import forest from '@/public/assets/img/forest.jpg';
import logos from '@/public/assets/img/logos.jpg';

import { ImageForest, ImageLogos } from './styled';

export default function MainPage() {
	return (
		<>
			<ImageForest>
				<Image
					src={forest.src}
                    fill
					blurDataURL={forest.blurDataURL}
					placeholder="blur"
					quality={80}
					sizes="(max-width: 1000px) 1000px, 100vw"
					alt="forest"
				/>
			</ImageForest>
			<Container $pt>
				<h3>
					E-commerce SPA with fake products. <br />
				</h3>
				<p>
					Used <code>create-next-app</code> and service{' '}
					<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
						dummyjson.com
					</a>
				</p>
				<ImageLogos>
					<Image
						src={logos}
						width={logos.width}
						height={logos.height}
						blurDataURL={logos.blurDataURL}
						placeholder="blur"
						quality={80}
						alt="logos"
					/>
				</ImageLogos>

				<br />

				<LayerBlock $fixedPadding>
					<Flexbox $gap={50}>
						<div>
							<h4>Features:</h4>
							<ul>
								<li>Search</li>
								<li>Sorting by: Price, Popularity</li>
								<li>Filter by category</li>
								<li>Add to cart</li>
								<li>Add to favorites</li>
								<li>Pagination</li>
								<li>Cart</li>
							</ul>
						</div>
						<div>
							<h4>Will be added later:</h4>
							<ul>
								<li>User login</li>
								<li>Form order</li>
							</ul>
						</div>
					</Flexbox>
				</LayerBlock>
				<LayerBlock $fixedPadding>
					<h4>Other tools:</h4>
					<ul>
						<li>Swiper</li>
						<li>Framer Motion</li>
						<li>ESLint</li>
						<li>Prettier</li>
						<li>API from dummyjson.com</li>
					</ul>
				</LayerBlock>
			</Container>
		</>
	);
}
