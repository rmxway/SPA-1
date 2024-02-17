import styled from 'styled-components';

import { Icon } from '@/components/ui/Icon';

export interface RatingTypes {
	rating: number | null;
}

export const Block = styled.div`
	display: flex;
	align-items: center;
	mix-blend-mode: multiply;

	span {
		display: inline-block;
		margin-left: 5px;
	}
`;

export const RatingStarsStyled = styled.div<RatingTypes>`
	position: relative;
	display: flex;
	align-items: center;
	padding-bottom: 3px;
`;

export const Wrapper = styled.div<{ width?: number | null }>`
	position: ${({ width }) => (typeof width === 'number' ? 'absolute' : 'relative')};
	left: 0;
	top: 0;
	display: flex;
	flex-wrap: nowrap;
	overflow: hidden;
	background-color: white;
	width: ${({ width }) => (typeof width === 'number' ? `calc((100% / 5) * ${width})` : '100%')};
`;

export const Star = styled(Icon)<{ active?: boolean }>`
	width: 16px;
	flex-shrink: 0;
	margin-right: 1px;
	color: ${({ active, theme }) => (active ? theme.colors.danger : theme.colors.gray.$3)};

	&:last-child {
		margin-right: 0;
	}
`;
