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
                primary: '#2bcdee',
                'background-dark': '#080c0d',
            },
            fontFamily: {
                display: ['Space Grotesk', 'sans-serif'],
                sans: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'levitate': 'levitate 6s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite',
                'pulse-live': 'pulse-live 2s ease-in-out infinite',
                'slide-up-robot': 'slide-up-robot 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'breathing': 'breathing 4s ease-in-out infinite',
                'wave-pulse': 'wave-pulse 1.2s ease-in-out infinite',
            },
            keyframes: {
                levitate: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'rotate-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'pulse-live': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.2)' },
                },
                'slide-up-robot': {
                    from: { transform: 'translateY(100%)', opacity: '0' },
                    to: { transform: 'translateY(0)', opacity: '1' },
                },
                breathing: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)', boxShadow: '0 0 20px rgba(43,205,238,0.1)' },
                    '50%': { transform: 'translateY(-5px) scale(1.01)', boxShadow: '0 0 35px rgba(43,205,238,0.2)' },
                },
                'wave-pulse': {
                    '0%, 100%': { height: '4px', opacity: '0.5' },
                    '50%': { height: '16px', opacity: '1' },
                },
            },
            boxShadow: {
                'glow-accent': '0 0 20px rgba(43, 205, 238, 0.2)',
            },
        },
    },
    plugins: [],
}
export default config
