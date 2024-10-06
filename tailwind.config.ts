import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#0d0d0d",
				light: "#f8f3d9",
				primary: "#fcba27",
			},
			fontFamily: {
				sans: [
					'"Inter"',
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				"darker-grotesque": ["Darker Grotesque", "sans-serif"],
			},
			fontSize: {
				xxs: ".5rem",
				xs: ".75rem",
				sm: ".875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "3.75rem",
				"7xl": "4.5rem",
				"8xl": "6rem",
			},
		},
	},
	plugins: [],
} satisfies Config;
