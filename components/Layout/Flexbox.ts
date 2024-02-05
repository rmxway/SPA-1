import styled from 'styled-components';

type FlexboxTypes = {
	nowrap?: boolean;
	justify?: 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end';
	align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
	direction?: 'column' | 'row' | 'reverse-column' | 'reverse-row';
	gap?: number;
};

/**
 * Flexbox styled component
 * @param {?boolean} nowrap
 * @param {?string} justify
 * @param {?string} align
 * @param {?string} direction
 * @param {?number} gap
 */

const Flexbox = styled.div<FlexboxTypes>`
	display: flex;
	flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ align }) => align || 'stretch'};
	flex-direction: ${({ direction }) => direction || 'row'};
	gap: ${({ gap }) => (gap ? `${gap}px` : 0)};
`;

export { Flexbox };
export default Flexbox;
