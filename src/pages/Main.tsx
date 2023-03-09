import { FC } from 'react';
import styled from 'styled-components/macro';

import logos from '@/assets/img/logos.jpg';
import { Container, LayerBlock } from '@/components/Layout';
import { media } from '@/theme';

const ImageLogos = styled.img`
	mix-blend-mode: multiply;
	max-width: 100%;
	max-height: 150px;
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

	${media.greaterThan('xs')`
        font-size: 5rem;
    `}
`;

const MainPage: FC = () => (
	<div>
		<MainHeader>
			<Container>
				Green Shop <span>Brand</span>
			</Container>
		</MainHeader>
		<Container>
			<p>
				Simple SPA with fake products. <br />
				Used <code>create-react-app</code> and service{' '}
				<a href="https://dummyjson.com" target="_blank" rel="noreferrer">
					dummyjson.com
				</a>
			</p>
			<ImageLogos src={logos} alt="logo" />
			<LayerBlock>
				<p>Most used package list:</p>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Typescript</li>
					<li>Redux Toolkit</li>
					<li>Styled Components</li>
					<li>Framer Motion</li>
					<li>API from dummyjson.com</li>
					<li>Craco</li>
					<li>Prettier</li>
				</ul>
			</LayerBlock>
		</Container>
	</div>
);

export { MainPage };
export default MainPage;
