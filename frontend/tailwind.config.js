/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                stone: {
                    50: '#F7F7F5',
                },
                primary: {
                    DEFAULT: '#2563EB',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    600: '#2563EB',
                    700: '#1D4ED8',
                },
                success: {
                    DEFAULT: '#16A34A',
                    50: '#F0FDF4',
                    600: '#16A34A',
                },
                warning: {
                    DEFAULT: '#D97706',
                    50: '#FFFBEB',
                    600: '#D97706',
                },
                danger: {
                    DEFAULT: '#DC2626',
                    50: '#FEF2F2',
                    600: '#DC2626',
                },
                border: '#E5E7EB',
                'text-primary': '#111827',
                'text-secondary': '#6B7280',
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '20px',
            },
        },
    },
    plugins: [],
}
