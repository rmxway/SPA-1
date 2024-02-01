import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

interface RatingTypes {
	rating: number | null;
}

const Block = styled.div`
	display: flex;
	align-items: center;
	mix-blend-mode: multiply;

	span {
		display: inline-block;
		margin-left: 5px;
	}
`;

const RatingStarsStyled = styled.div<RatingTypes>`
	position: relative;
	display: flex;
	align-items: center;
	padding-bottom: 3px;
`;

const Wrapper = styled.div<{ width?: number | null }>`
	position: ${(props) => (typeof props.width === 'number' ? 'absolute' : 'relative')};
	left: 0;
	top: 0;
	display: flex;
	flex-wrap: nowrap;
	overflow: hidden;
	background-color: white;
	width: ${(props) => (typeof props.width === 'number' ? `calc((100% / 5) * ${props.width})` : '100%')};
`;

const Star = styled.i<{ active?: boolean | unknown }>`
	width: 16px;
	flex-shrink: 0;
	margin-right: 1px;
	color: ${(props) => (props?.active ? theme.colors.danger : theme.colors.gray.$3)};

	&:last-child {
		margin-right: 0;
	}
`;

export function RatingStars({ rating, ...props }: RatingTypes) {
	return (
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
			<span>{rating}</span>
		</Block>
	);
}

export default RatingStars;
