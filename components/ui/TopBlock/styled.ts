import styled, { css } from 'styled-components';

import { media } from '@/theme';

export type TopBlockProps = { $isFont?: boolean };

export const TopBlockStyle = styled.div<TopBlockProps>`
	${({ theme, $isFont }) => css`
		background: linear-gradient(170deg, ${theme.colors.gray.$8} 30%, ${theme.colors.success} 100%);
		margin-top: 0;
		min-height: 60px;
		display: flex;
		align-items: center;
		padding: ${$isFont ? '30px 0' : '0 0'};
		color: ${theme.colors.success};

		transition: 0.2s all;

		h1 {
			font-size: 24px;
			margin: 0;
			background: ${theme.gradients.main};
			display: inline-block;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		span {
			font-weight: 300;
		}

		${$isFont &&
		css`
			& h1 {
				font-size: 2.5rem;
				line-height: 0.9;
				letter-spacing: -2px;
				text-transform: uppercase;
			}
		`}

		${media.greaterThan('sm')`
            padding: ${$isFont ? '40px 0' : '0 0'};
            min-height: 80px;

            h1 {
                font-size: 30px;
            }

            ${
				$isFont &&
				css`
					& h1 {
						font-size: 3rem;
					}
				`
			}
        `}
	`}
`;
