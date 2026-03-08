import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    cyan: '#06b6d4',
                    purple: '#8b5cf6',
                    emerald: '#10b981',
                },
                primary: '#2bcdee',
                'background-dark': '#09090b',
            },
            fontFamily: {
                display: ['Space Grotesk', 'sans-serif'],
                sans: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'slow-spin': 'slow-spin 120s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'wave': 'wave 1.2s ease-in-out infinite',
                'slide-up': 'slide-up 0.6s ease 0.5s both',
            },
            keyframes: {
                'slow-spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                wave: {
                    '0%, 100%': { height: '8px' },
                    '50%': { height: '28px' },
                },
                'slide-up': {
                    from: { transform: 'translateY(100px)', opacity: '0' },
                    to: { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
export default config
