import { FC } from 'react';
import styled from 'styled-components/macro';

import logos from '@/assets/img/logos.jpg';
import { LayerBlock } from '@/components/Layout';

const ImageLogos = styled.img`
	mix-blend-mode: multiply;
`;

const MainPage: FC = () => (
	<div>
		<h1>Info</h1>
		<LayerBlock>
			<p>
				Simple SPA with fake products. <br />
				Used <code>create-react-app</code> and service{' '}
				<a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
					fakestoreapi.com
				</a>
			</p>
			<ImageLogos src={logos} alt="logo" height="100px" />
			<p>Most used package list:</p>
			<ul>
				<li>React</li>
				<li>React Router</li>
				<li>Typescript</li>
				<li>Redux Toolkit</li>
				<li>Styled Components</li>
				<li>API from fakestoreapi.com</li>
				<li>Craco</li>
				<li>Prettier</li>
			</ul>
		</LayerBlock>
	</div>
);

export { MainPage };
export default MainPage;
