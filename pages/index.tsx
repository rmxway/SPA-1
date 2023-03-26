import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

import { Container, LayerBlock } from '@/components/Layout';
import logos from '@/public/assets/img/logos.jpg';

const ImageLogos = styled(Image)`
	mix-blend-mode: multiply;
	max-width: 100%;
	margin: 30px 0;
	object-position: left;
	object-fit: contain;
`;

const MainHeader = styled.h1`
	font-size: 3rem;
	line-height: 0.9;
	letter-spacing: -3px;
	text-transform: uppercase;
	font-weight: 900;
	background-color: ${(props) => props.theme.colors.gray.$3};
	margin-top: 0;
	padding: 30px 0;
	color: ${(props) => props.theme.colors.gray.$7};

	span {
		font-weight: 300;
	}
`;

export const MainPage: NextPage = () => (
	<>
		<MainHeader>
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
			<ImageLogos
				src={logos.src}
				blurDataURL={logos.blurDataURL}
				placeholder="blur"
				alt={logos.src}
				width={logos.width}
				height={logos.height}
			/>
			<LayerBlock>
				<p>Most used package list:</p>
				<ul>
					<li>React</li>
					<li>Next.js</li>
					<li>Babel</li>
					<li>Typescript</li>
					<li>Redux Toolkit</li>
					<li>Styled Components</li>
					<li>Framer Motion</li>
					<li>API from dummyjson.com</li>
					<li>Prettier</li>
				</ul>
			</LayerBlock>
		</Container>
	</>
);

export default MainPage;
