import { FC } from 'react';
import styled from 'styled-components/macro';

import { InputUI } from '@/components/ui';

import { ToggleSort } from './ToggleSort';

const StyledFilter = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;

	.search-filter {
		flex-grow: 1;

		input {
			width: 100%;
		}
	}

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
		<InputUI name="search" placeholder="Search" className="search-filter" />
	</StyledFilter>
);

export { Filter };
export default Filter;
