import { FC } from 'react';
import styled from 'styled-components/macro';

interface RatingTypes {
	rating?: number | null;
}

const Block = styled.div`
	display: flex;
	align-items: center;
	mix-blend-mode: multiply;
`;

const RatingStarsStyled = styled.div<RatingTypes>`
	position: relative;
	display: flex;
	align-items: center;
	padding-bottom: 3px;
`;

const Wrapper = styled.div<{ width?: number | null }>`
	position: ${(props) => (props.width ? 'absolute' : 'relative')};
	left: 0;
	top: 0;
	display: flex;
	flex-wrap: nowrap;
	overflow: hidden;
	background-color: white;
	margin-right: 5px;
	width: ${(props) => (props.width ? `calc((100% / 5) * ${props.width} - 5px)` : '100%')};
`;

const Star = styled.i<{ active?: boolean | unknown }>`
	width: 16px;
	flex-shrink: 0;
	margin-right: 1px;
	color: ${(props) => (props?.active ? props.theme.colors.danger : props.theme.colors.gray.$3)};

	&:last-child {
		margin-left: 0;
	}
`;

const RatingStars: FC<RatingTypes> = ({ rating, ...props }) => (
	<Block {...props}>
		<RatingStarsStyled rating={rating}>
			<Wrapper>
				<Star className="icofont icofont-star" />
				<Star className="icofont icofont-star" />
				<Star className="icofont icofont-star" />
				<Star className="icofont icofont-star" />
				<Star className="icofont icofont-star" />
			</Wrapper>
			<Wrapper width={rating}>
				<Star className="icofont icofont-star" active />
				<Star className="icofont icofont-star" active />
				<Star className="icofont icofont-star" active />
				<Star className="icofont icofont-star" active />
				<Star className="icofont icofont-star" active />
			</Wrapper>
		</RatingStarsStyled>
		{rating}
	</Block>
);

export { RatingStars };
export default RatingStars;