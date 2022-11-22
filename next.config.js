<<<<<<< HEAD
const nextSafe = require("next-safe");
=======
const securityHeaders = [
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
];
>>>>>>> parent of 44f1f03 (Add next safe)

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
<<<<<<< HEAD
				headers: nextSafe(true),
=======
				headers: securityHeaders,
>>>>>>> parent of 44f1f03 (Add next safe)
			},
		];
	},
};

const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA(nextConfig);
