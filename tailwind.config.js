/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeOutUp: {
                    '0%': { opacity: 1, transform: 'translateY(0)' },
                    '100%': { opacity: 0, transform: 'translateY(-20px)' },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 0.5s ease-out forwards',
                fadeOutUp: 'fadeOutUp 0.5s ease-in forwards',
            },
        },
    },
    plugins: [],
};
  