import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

const InputWrapper = styled.div`
    position: relative;
    padding-bottom: 10px;

	input {
		padding: 11px 16px 10px;
		border-radius: ${theme.radius.borderRadius};
		border: 1px solid #aaa;
		background-color: #fff;
        width: 100%;

		&:active,
		&:focus {
			border-color: ${theme.colors.success};
			outline: none;
		}

		&:disabled {
			background-color: ${theme.colors.gray.$3};
			opacity: 0.8;
		}
	}
`;

export { InputWrapper };
export default InputWrapper;
