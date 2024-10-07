import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/blogs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Helvetica',
      secondary: ["Helvetica", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: '10px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        body: '#861b28',
        dark: '#0a0909',
        "primary-main": {
          DEFAULT: "#861b28",
        },
        "second-main": {
          DEFAULT: "#e4cdb4"
        },
        "iconh-main": {
          DEFAULT: "#dab289"
        },
        "green-grab": {
          DEFAULT: "#00b14f"
        },
        "orange-main": {
          DEFAULT: "#fe7634"
        },
        grey: {
          DEFAULT: '#777876',
          100: '#e4e4e3',
        },
        accent: {
          DEFAULT: '#861b28',
          hover: '#e4cdb4',
          borderColor: '#e4cdb4'
        },
        heroBefore: 'rgba(0, 0, 0, 0.6)',
        navPanel: "rgba(134,27,40,0.8)",
        navPanelTextHover: "#dab289"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        pattern: "url('/img/body-bg-border.png')",
        hero: "url('/img/hero/bg-lungtum4.webp')",
        menu: "url('/img/menu/bg3.webp')"

      },


    },
  },
  plugins: [],
}
export default config
