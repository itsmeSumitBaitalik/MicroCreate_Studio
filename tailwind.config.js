export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#1A1613',
        charcoal: '#14110F',
        cream: '#F4EFE7',
        sand: '#E7DDCD',
        clay: '#C4A98A',
        gold: '#B8873F',
        stone: '#8A8078',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        wordmark: ['"Bebas Neue"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
}
