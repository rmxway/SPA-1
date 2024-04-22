import { FC } from 'react';

import { WrapperError } from './styled';

interface ErrorMessageProps {
	error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
	<WrapperError>{error && <span>{error}</span>}</WrapperError>
);
export default ErrorMessage;
