module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideInUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideOutUp: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-100%)', opacity: '0' },
                },
            },
            animation: {
                slideInUp: 'slideInUp 0.5s ease-out forwards',
                slideOutUp: 'slideOutUp 0.5s ease-in forwards',
            },
        },
    },
    plugins: [],
}
  