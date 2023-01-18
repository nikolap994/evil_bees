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
				"github-black": "#0d1117",
				"discord-purple": "#5865f2",
				"good-first-issue-tag": {
					DEFAULT: "#382b80",
					light: "#b7abff",
				},
				"help-wanted-tag": {
					DEFAULT: "#004339",
					light: "#35d7bf",
				},
				"beginner-friendly-tag": {
					DEFAULT: "#882707",
					light: "#f3a78e",
				},
				"first-timers-only-tag": {
					DEFAULT: "#09560e",
					light: "#5ccb31",
				},
			},
		},
	},
	plugins: [],
};
