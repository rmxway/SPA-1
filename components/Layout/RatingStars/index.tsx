import { Block, RatingStarsStyled, RatingTypes, Star, Wrapper } from './styled';

export function RatingStars({ rating, ...props }: RatingTypes) {
	return (
		<Block {...props}>
			<RatingStarsStyled rating={rating}>
				<Wrapper>
					<Star icon="star" />
					<Star icon="star" />
					<Star icon="star" />
					<Star icon="star" />
					<Star icon="star" />
				</Wrapper>
				<Wrapper width={rating}>
					<Star icon="star" active />
					<Star icon="star" active />
					<Star icon="star" active />
					<Star icon="star" active />
					<Star icon="star" active />
				</Wrapper>
			</RatingStarsStyled>
			<span>{rating}</span>
		</Block>
	);
}

export default RatingStars;
