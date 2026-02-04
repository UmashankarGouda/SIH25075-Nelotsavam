import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cultural Festival Theme - Nelotsavam Colors
        primary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffcf33',
          500: '#FFC107', // Golden Yellow - Primary
          600: '#e6ac00',
          700: '#cc9600',
          800: '#b38100',
          900: '#996b00',
        },
        secondary: {
          50: '#f0f8e6',
          100: '#e1f1cc',
          200: '#c3e399',
          300: '#a5d566',
          400: '#94d149',
          500: '#8BC34A', // Parrot Green - Secondary
          600: '#7eb043',
          700: '#6f9a3a',
          800: '#608432',
          900: '#516e29',
        },
        accent: {
          marigold: '#FF9800', // Marigold Orange for CTAs
          maroon: '#800000',   // Auspicious Maroon for highlights
          peacock: '#03A9F4',  // Peacock Blue for info
        },
        cultural: {
          cream: '#FFFDD0',    // Clean Cream backgrounds
          saffron: '#FF6B35',  // Traditional saffron
          turmeric: '#E4B429', // Turmeric yellow
          vermillion: '#E34234', // Traditional red
        },
        // Default shadcn colors maintained for components
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        radius: "hsl(var(--radius))",
      },
      fontFamily: {
        'festival': ['Inter', 'Hind', 'sans-serif'], // Cultural yet readable
        'malayalam': ['Noto Sans Malayalam', 'sans-serif'], // For Malayalam text
      },
      animation: {
        'flower-shower': 'flower-shower 3s ease-in-out',
        'mandala-fill': 'mandala-fill 2s ease-in-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-cultural': 'pulse-cultural 2s infinite',
      },
      keyframes: {
        'flower-shower': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'mandala-fill': {
          '0%': { strokeDasharray: '0 1000' },
          '100%': { strokeDasharray: '1000 0' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-cultural': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 193, 7, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 193, 7, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 193, 7, 0)' },
        },
      },
      backgroundImage: {
        'kolam-pattern': "url('/patterns/kolam-bg.svg')",
        'rangoli-border': "url('/patterns/rangoli-border.svg')",
        'paddy-field': "url('/images/paddy-field-bg.jpg')",
        'festival-gradient': 'linear-gradient(135deg, #FFC107 0%, #8BC34A 50%, #03A9F4 100%)',
      },
      borderRadius: {
        'cultural': '12px', // Consistent cultural radius
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
export default config