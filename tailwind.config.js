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
				white: '#FFFFFF',
				gray: '#97ADC7',
				dark: '#0C1B2E',
				'dark-light': '#0F2137',
				secondary: '#00EDE6',
				'secondary-light': '#1E4854',
			},
		},
	},
	plugins: [],
};
