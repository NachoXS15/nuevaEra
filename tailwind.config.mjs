/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				darkblue: "#254B58",
				cyan: "#03D9D9",
				darkgreen: "#C3F2CE",
				darkgray: "#A6A6A6"
			},
			fontFamily:{
				"sans":["futura-pt"]
			}
		},
	},
	plugins: [],
}
