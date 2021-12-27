module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      xs: '360px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      iphoneX: { 'max': '500px' },
    },
    extend: {
      display: ["group-hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}


