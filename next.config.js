const securityHeaders = [
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
];

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
				headers: securityHeaders,
			},
		];
	},
};

const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA(nextConfig);
