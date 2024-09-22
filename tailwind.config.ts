const tokens = require("./src/design-tokens/design-tokens.json");

const colorLabels: Record<string, { value: string }> = tokens.color;
const colors = Object.fromEntries(
	Object.entries(colorLabels).map((label) => [label[0], label[1].value])
);

const fontLabels = tokens.font;
const screens = Object.fromEntries(
	Object.keys(fontLabels).map((label) => [`screen_${label}`, `${label}px`])
);

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors,
			fontFamily: {
				sans: ["var(--font-onest)"],
			},
			padding: {
				"4.5": "1.125rem",
				"11.5": "2.8125rem",
				"44.5": "11.25rem",
			},
			flex: {
				"0-auto": "0 0 auto",
			},
			borderRadius: {
				"2lg": "10px",
			},
			screens: {
				...screens,
				screen_960: "960px",
			},
		},
	},
	plugins: [],
};
