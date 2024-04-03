import { FC } from 'react';

import { Block, RatingStarsStyled, RatingTypes, Star, Wrapper } from './styled';

const stars = new Array(5).fill('').map((_, idx) => idx + 1);

export const RatingStars: FC<RatingTypes> = ({ rating, ...props }) => (
	<Block {...props}>
		<RatingStarsStyled>
			<Wrapper>
				{stars.map((star) => (
					<Star icon="star" key={star} />
				))}
			</Wrapper>
			<Wrapper $width={rating}>
				{stars.map((star) => (
					<Star icon="star" $active key={star} />
				))}
			</Wrapper>
		</RatingStarsStyled>
		<span>{rating}</span>
	</Block>
);

export default RatingStars;
