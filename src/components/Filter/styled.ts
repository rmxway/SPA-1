import styled from 'styled-components/macro';

export const StyledFilter = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;

	.search-filter {
		flex-grow: 1;

		input {
			width: 100%;
		}
	}

	.title {
		text-transform: uppercase;
		font-size: 16px;
		color: ${(props) => props.theme.colors.gray.$5};
		margin-right: 20px;
	}
`;

export default StyledFilter;
