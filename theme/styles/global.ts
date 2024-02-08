import { createGlobalStyle } from 'styled-components';

import { base, reset } from './index';

export const GlobalStyles = createGlobalStyle`
    ${reset};
    ${base};
`;

export default GlobalStyles;
