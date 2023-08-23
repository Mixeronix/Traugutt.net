import type { Config } from 'tailwindcss'

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				PurplePattern: "url('/PurplePattern.svg')",
			},
			colors: {
				MainGreen: "#44D375",
				MainPurple: "#6835F1",
				LightPurple: "#E8E1FD",
				MainDarkGray: "#222222",
			},
			padding: {
				"50px": "50px",
				"25px": "25px",
				"0.75": "3px",
			},
			gap: { "50px": "50px" },
			borderRadius: { "4xl": "3rem" },
			screens: {
				"4xl": "2048px",
				"3xl": "1792px",
				xs: "512px",
				"2xs": "384px",
			},
		},
	},
	plugins: [],
};
export default config