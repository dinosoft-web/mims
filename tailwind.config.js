/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1020px',
			xl: '1440px',
		},
		extend: {
			colors: {
				softBlue: 'rgba(54, 98, 247, 0.10)',
				darkBlue: '#3662F7',
				softRed: '#940CAB',
				grayishBlue: 'hsl(229, 8%, 60%)',
				veryDarkBlue: '#2E4AAB',
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
			backgroundImage: () => ({
				dots: "url('../images/bg-dots.svg')",
			}),
		},
	},
	plugins: [],
}
