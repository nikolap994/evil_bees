const cspPolicy = "default-src 'self';connect-src  'self','preview.contentful.com','*.flippenterprise.net', 'aq.flippenterprise.net','https://www.google-analytics.com','dpm.demdex.net','stats.g.doubleclick.net','lcljoefresh.sc.omtrdc.net','sfml.flippback.com','p.flipp.com','https://sentry.io/', 'https://vitals.vercel-insights.com/'";
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Content-Security-Policy',
    value: cspPolicy
  }
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
