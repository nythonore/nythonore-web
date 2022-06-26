/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},

		extend: {
			colors: {
				light: '#CCD6F6',
				gray: '#8892AF',
				dark: '#0A1930',
				'dark-light': '#112240',
				secondary: '#18EDCC',
				'secondary-light': '#1E4854',
			},
		},
	},
	plugins: [],
};
