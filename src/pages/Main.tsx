import { FC } from 'react';
import styled from 'styled-components/macro';

import logos from '@/assets/img/logos.jpg';
import { Flexbox, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';

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
		<LayerBlock>
			<h4>Buttons</h4>
			<Flexbox align="flex-start">
				<ButtonUI primary margins>
					Primary
				</ButtonUI>
				<ButtonUI success margins>
					Success
				</ButtonUI>
				<ButtonUI danger margins>
					Danger
				</ButtonUI>
				<ButtonUI margins>Default</ButtonUI>
			</Flexbox>

			<h4>Button disabled</h4>
			<Flexbox align="flex-start">
				<ButtonUI disabled primary margins>
					Primary
				</ButtonUI>
				<ButtonUI disabled success margins>
					Success
				</ButtonUI>
				<ButtonUI disabled danger margins>
					Danger
				</ButtonUI>
				<ButtonUI disabled margins>
					Default
				</ButtonUI>
			</Flexbox>

            <h4>Input</h4>
            <InputUI name="test" placeholder='Placeholder'/>

			<h1>Header H1</h1>
			<h2>Header H2</h2>
			<h3>Header H3</h3>
			<h4>Header H4</h4>
			<h5>Header H5</h5>
			<br />
			<h4>Rating</h4>
			<Flexbox>
				<Flexbox direction="column" style={{ marginRight: '30px' }}>
					<RatingStars rating={5} />
					<RatingStars rating={4} />
					<RatingStars rating={3} />
					<RatingStars rating={2} />
					<RatingStars rating={1} />
					<RatingStars rating={0} />
				</Flexbox>
				<Flexbox direction="column">
					<RatingStars rating={4.8} />
					<RatingStars rating={4.4} />
					<RatingStars rating={3.7} />
					<RatingStars rating={2.5} />
					<RatingStars rating={0.9} />
					<RatingStars rating={0.5} />
				</Flexbox>
			</Flexbox>
		</LayerBlock>
	</div>
);

export { MainPage };
export default MainPage;
