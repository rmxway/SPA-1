import styled from 'styled-components/macro';

import { media } from '@/theme';

export const StyledFilter = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	flex-direction: column;
	align-items: stretch;
	flex-grow: 1;
	margin-top: 20px;

	.search-filter {
		flex-grow: 1;
		margin-top: 20px;

		input {
			width: 100%;
		}

		${media.greaterThan('xs')`
            margin-top: 0;
        `}
	}

	.title {
		text-transform: uppercase;
		font-size: 16px;
		color: ${(props) => props.theme.colors.gray.$5};
		margin-right: 20px;
	}

	${media.greaterThan('xs')`
        flex-direction: row;
        align-items: center;
    `}
`;

export default StyledFilter;
