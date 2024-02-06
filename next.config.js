/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: process.env.NODE_ENV === 'production',
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.dummyjson.com',
			},
		],
	},
	compiler: {
		styledComponents: true,
	},
	webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false,
		};

		return config;
	},
};
