'use client';

import Image from 'next/image';

import { Container, LayerBlock } from '@/components/Layout';
import logos from '@/public/assets/img/logos.jpg';

import { FirstBlock, ImageLogos, SecondBlock } from './styled';

export default function MainPage() {
	return (
		<Container $pt>
			<FirstBlock $direction="row" $gap={20}>
				<div>
					<h3>
						E-commerce SPA with fake products. <br />
					</h3>
					<p>
						Used <code>create-next-app</code> and service{' '}
						<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
							dummyjson.com
						</a>
					</p>
				</div>
				<ImageLogos>
					<Image
						src={logos.src}
						width={logos.width}
						height={logos.height}
						priority
						quality={80}
						alt="logos"
					/>
				</ImageLogos>
			</FirstBlock>

			<br />

			<SecondBlock $templateColumns="1fr">
				<LayerBlock $fixedPadding>
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
							<li>Form order</li>
						</ul>
					</div>
				</LayerBlock>
				<LayerBlock $fixedPadding>
					<div>
						<h4>Other tools:</h4>
						<ul>
							<li>ESLint</li>
							<li>Prettier</li>
							<li>Framer Motion</li>
							<li>API from dummyjson.com</li>
						</ul>
					</div>
				</LayerBlock>
			</SecondBlock>
		</Container>
	);
}
