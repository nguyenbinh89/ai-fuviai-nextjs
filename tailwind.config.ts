import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f0ff',
        secondary: '#7000ff',
        accent: '#ff0080',
        dark: '#0a0a0f',
      },
    },
  },
  plugins: [],
}
export default config
