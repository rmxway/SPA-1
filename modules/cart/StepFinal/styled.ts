import styled from 'styled-components';

export const WrapperFinal = styled.div`
	position: relative;
	display: flex;
	gap: 30px;
	flex-grow: 1;
	top: -25px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	i {
		color: ${({ theme }) => theme.colors.danger};
	}

    p {
        font-size: 1.2rem;
    }
`;
