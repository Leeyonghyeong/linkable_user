/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--color-bg-primary)',
        'font-white': 'rgba(var(--font-default-color))',
        'font-black': 'rgba(var(--font-black-color))',
        primary: 'var(--primary)',
        white: 'var(--white)',
        black: 'var(--black)',
        error: 'var(--error)',
      },
    },
  },
  plugins: [],
}
