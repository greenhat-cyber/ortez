/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4E598D",
        "primary-shade1": "#CDDCF2",
        "primary-shade2": "#FAFAFC",
        "primary-shade3": "#EBEBF5",
        "primary-shade4": "#E2E4ED",
        "secondary": "#9EDEE0",
        accent: {
          DEFAULT: '#165F61',
        },
      },
    },
    plugins: [],
  }
}