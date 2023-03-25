import styled from 'styled-components';

import { ButtonUI } from '@/components/ui';
import { media } from '@/theme';

const ButtonPagination = styled(ButtonUI)`
	margin-right: 2px;
	width: 25px;
	padding: 6px 0;
	text-align: center;
	line-height: 1;

	&,
	&:focus,
	&:active,
	&:link {
		transition-duration: 0s;
	}

	&:hover {
		transition-duration: 0.1s;
	}

	${media.greaterThan('xs')`
        width: 30px;
        padding: 8px 0;
        margin-right: 3px;
    `}
`;

export { ButtonPagination };
export default ButtonPagination;
