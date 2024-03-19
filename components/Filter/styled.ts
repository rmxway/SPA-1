import styled from 'styled-components';

import { InputWrapper } from '@/components/ui/Input/styled';
import { media } from '@/theme';

export const StyledFilter = styled.div`
	display: flex;
	margin: 30px 0;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: 20px;

	${media.greaterThan('xs')`
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}

	${InputWrapper} {
		margin-top: 20px;
		transition: 0.2s;
		width: 100%;

		input {
			width: 100%;
			min-width: 250px;
		}

		&:has(input:focus) {
			flex-grow: 1;
		}

		${media.greaterThan('xs')`
            margin-top: 0;
            width: auto;
        `}
	}
`;

export default StyledFilter;
