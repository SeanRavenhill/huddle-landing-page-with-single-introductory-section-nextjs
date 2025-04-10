import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}', 
    ],
    extract
  }, 
    
  theme: {
    extend: {
      /** @type {import('fluid-tailwind').FluidThemeConfig} */
      fluid: () => ({
        defaultScreens: ['40rem', '90rem'],
      }),
      screens, // Tailwind's default screens, in `rem`
      fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryViolet: 'hsl(257, 40%, 49%)',
        softMagenta: 'hsl(300, 69%, 71%)',
      },
      backgroundImage: {
        'desktop': "url('/images/bg-desktop.svg')",
        'mobile': "url('/images/bg-mobile.svg')"
      },
    },
  },
  plugins: [
    fluid
  ],
} satisfies Config;
