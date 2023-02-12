import './includes.scss';

import { css } from 'styled-components/macro';

const base = css`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
		overflow-y: scroll;
		font-family: 'Sofia Sans', sans-serif;
		background-color: ${(props) => props.theme.colors.gray.$2};
		font-size: 16px;
		display: block;
		padding-top: 70px;
		line-height: 1.25;
		padding-bottom: 50px;
	}
	code {
		font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace;
	}

	h1 {
		font-size: 2rem;
		margin: 20px 0;
	}

	h2 {
		font-size: 1.75rem;
		margin: 15px 0;
	}

	h3 {
		font-size: 1.5rem;
		margin: 10px 0;
	}

	h4 {
		font-size: 1.2rem;
		margin: 8px 0;
	}

	h5 {
		font-size: 1rem;
		margin: 4px 0;
	}

	ul {
		list-style: disc;
		padding: 5px 0 5px 25px;
	}
`;

export { base };
export default base;
