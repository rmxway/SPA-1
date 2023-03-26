/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.dummyjson.com',
			},
		],
	},
	webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false,
		};

		return config;
	},
};
