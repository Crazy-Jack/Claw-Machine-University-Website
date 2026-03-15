/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          text: '#e5e5e5',
          muted: '#a3a3a3',
        },
        red: {
          primary: '#b91c1c',
          dark: '#7f1d1d',
          light: '#dc2626',
          glow: '#ef4444',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Monaco', 'monospace'],
        serif: ['"Source Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
