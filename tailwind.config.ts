import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['var(--font-kaushan-script)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        primary: {
          DEFAULT: '#1ABC9C',
          dark: '#16A085',
          light: '#48C9B0',
        },
        secondary: {
          DEFAULT: '#FF6B6B',
          dark: '#E74C3C',
          light: '#FF8F8F',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFC200',
          light: '#FFDB4D',
        },
        neutral: {
          DEFAULT: '#34495E',
          dark: '#2C3E50',
          light: '#596A7B',
        },
        background: {
          DEFAULT: '#F0F0F0',
          dark: '#E0E0E0',
          light: '#F5F5F5',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
