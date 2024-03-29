import styled from 'styled-components';

import { media } from '@/theme';

export const StyledFilter = styled.div`
	display: flex;
	align-items: center;
	margin: 30px 0;
	flex-direction: column;
	align-items: stretch;
	flex-grow: 1;

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
		color: ${({ theme }) => theme.colors.gray.$5};
		margin-right: 20px;
	}

	${media.greaterThan('xs')`
        flex-direction: row;
        align-items: center;
    `}
`;

export default StyledFilter;
