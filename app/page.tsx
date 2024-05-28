'use client';

import Image from 'next/image';

import { Container, Grid, LayerBlock } from '@/components/Layout';
import logos from '@/public/assets/img/logos.jpg';

import { ImageLogos } from './styled';

export default function MainPage() {
	return (
		<Container $pt>
			<Grid $direction="column" $templateColumns="1fr 1fr" $align="center" $gap={20}>
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
						src={logos}
						width={logos.width}
						height={logos.height}
						blurDataURL={logos.blurDataURL}
						placeholder="blur"
						quality={80}
						alt="logos"
					/>
				</ImageLogos>
			</Grid>

			<br />

			<LayerBlock $fixedPadding>
				<Grid $gap={50} $direction="column" $templateColumns="1fr 1fr 1fr">
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
					<div>
						<h4>Will be added later:</h4>
						<ul>
							<li>User login</li>
						</ul>
					</div>
					<div>
						<h4>Other tools:</h4>
						<ul>
							<li>ESLint</li>
							<li>Prettier</li>
							<li>Framer Motion</li>
							<li>API from dummyjson.com</li>
						</ul>
					</div>
				</Grid>
			</LayerBlock>
		</Container>
	);
}
