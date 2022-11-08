/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.{png,svg}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'geo-pattern': "url('/images/geometric-bg.png')",
				'idea-pattern': "url('/images/analyse.png')",
			},
			animation: {
				'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite',
				'rtl-linear-infinite': 'rtl-linear-infinite 100s linear infinite',
			},
			keyframes: {
				'ltr-linear-infinite': {
					'from': { 'background-position': '0 0' },
					'to': { 'background-position': '400% 0%' },
				},
				'rtl-linear-infinite': {
					'from': { 'background-position': '400% 0%' },
					'to': { 'background-position': '0 0' },
				},
			},
		},
	},
	plugins: [],
};
