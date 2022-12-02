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
				"black-opacity": "rgba(0, 0, 0, 0.54)",
				"zinc-800-opacity": "rgba(39, 39, 42, 0.54)",
			},
			animation: {
				"transform-translate-full":
					"transform-translate-full ease-out 6s infinite",
			},
			keyframes: {
				"transform-translate-full": {
					"0%": { transform: "translateX(0px)" },
					"50%": { transform: "translateX(100vw)" },
					"100%": { transform: "translateX(0px)" },
				},
			},
		},
	},
	plugins: [],
};
