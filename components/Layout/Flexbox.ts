import styled, { css } from 'styled-components';

type FlexboxTypes = {
	$align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
	$direction?: 'column' | 'row' | 'reverse-column' | 'reverse-row';
	$gap?: number;
	$justify?: 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end';
	$nowrap?: boolean;
};

/**
 * Flexbox styled component
 * @param {?string} $align - 'center' | 'flex-start' | 'flex-end' | 'stretch'
 * @param {?string} $direction - 'column' | 'row' | 'reverse-column' | 'reverse-row'
 * @param {?number} $gap - this property doesn't work in Safari
 * @param {?string} $justify - 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end'
 * @param {?boolean} $nowrap
 */

const Flexbox = styled.div<FlexboxTypes>`
	${({ $align, $direction, $gap, $justify, $nowrap }) => css`
		display: flex;
		flex-wrap: ${$nowrap ? 'nowrap' : 'wrap'};
		justify-content: ${$justify || 'flex-start'};
		align-items: ${$align || 'stretch'};
		flex-direction: ${$direction || 'row'};
		gap: ${$gap ? `${$gap}px` : 0};
	`}
`;

export { Flexbox };
export default Flexbox;
