import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080d',
          900: '#0b0d14',
          850: '#11141c',
          800: '#1a1e28',
          750: '#222735',
        },
        fg: {
          DEFAULT: '#eef0f5',
          2: '#a3a9b8',
          3: '#7a8296',
        },
        line: 'rgba(238, 240, 245, 0.08)',
        accent: '#c7a56b',
        positive: '#4cc38a',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        rise: 'rise 400ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
