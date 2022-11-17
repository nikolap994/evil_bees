/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.{png,svg}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			extend: {
				fontFamily: {
				  "catamaran-light": ["Noto-Light"],
				  "catamaran-regular": ["Noto-Regular"],
				  "catamaran-medium": ["Noto-Medium"],
				  "catamaran-bold": ["Noto-Bold"],
				},
			},
			backgroundImage: {
				'geo-pattern': "url('/images/moving-cubes.gif')",
				'idea-pattern': "url('/images/rocket-icon.png')",
			},
			animation: {
				'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite',
				'rtl-linear-infinite': 'rtl-linear-infinite 100s linear infinite',
				'slide-down': 'slide-down 3s linear',
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
				'slide-down': {
					'from': { 'transform': 'translateY(-80px)' },
					'to': { 'transform': 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};
