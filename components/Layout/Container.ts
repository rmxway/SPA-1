import styled, { css } from 'styled-components';

import { media } from '@/theme';

/**
 * Adaptive container block
 * @param {boolean} $pt - padding-top: 30px
 */

export const Container = styled.div<{ $pt?: boolean }>`
	position: relative;
	display: block;
	padding: 0 20px;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;

	${({ $pt }) =>
		$pt &&
		css`
			padding-top: 30px;
		`}

	${media.greaterThan('sm')`
		max-width: 100%;
	`}

	${media.greaterThan('md')`
		max-width: 1024px;
	`}

	${media.greaterThan('lg')`
		max-width: 1280px;
	`}
`;

export default Container;
