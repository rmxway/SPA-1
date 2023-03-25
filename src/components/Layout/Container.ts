import styled, { css } from 'styled-components';

import { media } from '@/theme';

const Container = styled.div<{ mt?: boolean }>`
	position: relative;
	padding: 0 20px;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;

	${(props) =>
		props.mt &&
		css`
			margin-top: 20px;
		`}

	${media.greaterThan('sm')`
		max-width: 768px;
	`}

	${media.greaterThan('md')`
		max-width: 1024px;
	`}

	${media.greaterThan('lg')`
		max-width: 1280px;
	`}
`;

export { Container };
export default Container;
