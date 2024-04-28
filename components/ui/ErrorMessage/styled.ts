import styled, { css } from 'styled-components';

export const WrapperError = styled.div`
	${({ theme }) => css`
        position: relative;
        width: 100%;
        bottom: -5px;

        span {
            position: absolute;
            left: 0;
            font-weight: 600;
            color: ${theme.colors.danger};
            display: block;
            font-size: 12px;
        }
    `}
`;
