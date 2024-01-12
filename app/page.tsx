'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { Container, LayerBlock } from '@/components/Layout';
import logos from '@/public/assets/img/logos.jpg';
import MainHeader from '@/components/ui/MainHeader';

const ImageLogos = styled<any>(Image)`
	mix-blend-mode: multiply;
	max-width: 100%;
	margin: 30px 0;
	object-position: left;
	object-fit: contain;
`;

export default function MainPage() {
	return (
		<>
			<MainHeader $isFont>
				<Container>
					Green Shop <span>Brand</span>
				</Container>
			</MainHeader>
			<Container>
				<p>
					Simple SPA with fake products. <br />
					Used <code>create-next-app</code> and service{' '}
					<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
						dummyjson.com
					</a>
				</p>
				<ImageLogos src={logos} alt="logos" placeholder="blur" />
				<LayerBlock>
					<p>Most used package list:</p>
					<ul>
						<li>React</li>
						<li>Next.js</li>
						<li>Typescript</li>
						<li>Redux Toolkit</li>
						<li>RTK Query</li>
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
