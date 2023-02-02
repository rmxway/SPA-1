import { FC } from 'react';
import styled from 'styled-components/macro';

import { ToggleSort } from './ToggleSort';

const StyledFilter = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;

	.title {
		text-transform: uppercase;
		font-size: 16px;
		color: ${(props) => props.theme.colors.gray.$5};
		margin-right: 20px;
	}
`;

const Filter: FC = () => (
	<StyledFilter>
		<div className="title">Sorting</div>
		<ToggleSort sort="price" value="Price" />
		<ToggleSort sort="rating" value="Rating" />
	</StyledFilter>
);

export { Filter };
export default Filter;
