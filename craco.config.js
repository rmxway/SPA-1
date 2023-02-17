// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require('react-app-alias');
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
				test: /\.(tsx|ts)?$/i,
				loader: 'awesome-typescript-loader',
				options: {
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)?$/i,
				type: 'asset/resource',
			},
		],
	},
};
