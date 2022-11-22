const nextSafe = require("next-safe");
const isDev = process.env.NODE_ENV !== 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: nextSafe({ isDev }),
			},
		];
	},
};

const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA(nextConfig);
