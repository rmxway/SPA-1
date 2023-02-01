import './includes.scss';

import { css } from 'styled-components';

const base = css`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
		margin: 0;
		padding: 0;
		overflow-y: scroll;
		font-family: 'Sofia Sans', sans-serif;
		background-color: ${(props) => props.theme.colors.gray.$2};
		font-size: 16px;
		padding-top: 70px;
		line-height: 1.25;
	}
	code {
		font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace;
	}
	html,
	body {
		height: 100%;
	}

    h1 {
        font-size: 2rem;
        margin: 20px 0;
    }

	ul {
		list-style: disc;
		padding: 5px 0 5px 25px;
	}
`;

export { base };
export default base;
