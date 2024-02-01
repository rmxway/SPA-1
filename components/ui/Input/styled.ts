import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

const InputWrapper = styled.div`
	label {
		display: block;
		margin-bottom: 5px;
		color: ${theme.colors.label};
		text-transform: uppercase;
		font-size: 10px;
	}

	input {
		padding: 11px 16px 10px;
		border-radius: ${theme.radius.borderRadius};
		border: 1px solid #aaa;
		background-color: #f9f9f9;

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
