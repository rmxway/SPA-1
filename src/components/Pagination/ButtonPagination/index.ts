import styled from 'styled-components/macro';

import { ButtonUI } from '@/components/ui';

const ButtonPagination = styled(ButtonUI)`
	margin-right: 5px;
	width: 35px;
	padding: 10px 0;
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
`;

export { ButtonPagination };
export default ButtonPagination;
