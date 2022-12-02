/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.{png,svg}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"catamaran-light": ["Noto-Light"],
				"catamaran-regular": ["Noto-Regular"],
				"catamaran-medium": ["Noto-Medium"],
				"catamaran-bold": ["Noto-Bold"],
			},
			colors: {
				'black-opacity': 'rgba(0, 0, 0, 0.54)',
				'zinc-800-opacity': 'rgba(39, 39, 42, 0.54)',
			}
		},
	},
	plugins: [],
};
