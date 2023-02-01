/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CracoAliasPlugin } = require('react-app-alias');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
	plugins: [
		{
			plugin: CracoAliasPlugin,
			options: {},
		},
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				options: {
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
				},
			},
		],
	},
};
