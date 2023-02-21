import { FC } from 'react';

import { Container, Flexbox, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
// import { MotionButtonUI } from '@/components/ui/Button/MotionButtonUI';

const UIPage: FC = () => (
	<Container>
		<LayerBlock mt>
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

			<h4>Buttons disabled</h4>
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

			{/* <h4>Motion Buttons</h4>
			<Flexbox align="flex-start">
				<MotionButtonUI primary margins>
					Primary
				</MotionButtonUI>
				<MotionButtonUI disabled success margins>
					Success
				</MotionButtonUI>
				<MotionButtonUI disabled danger margins>
					Danger
				</MotionButtonUI>
				<MotionButtonUI disabled margins>
					Default
				</MotionButtonUI>
			</Flexbox> */}

			<h4>Input</h4>
			<InputUI name="test" placeholder="Placeholder" />

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
	</Container>
);

export { UIPage };
export default UIPage;
