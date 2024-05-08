/** @type {import('tailwindcss').Config} */
export default {
  content: ['/src/components/InfoDisplay/EventInfo.jsx', 'src/components/InfoDisplay/ResultList.jsx','src/components/Banner.jsx','src/components/NavBar.jsx', 'src/components/Footer.jsx', 'src/pages/HomePage.jsx', 'src/components/FormAndSubmission/RequestPromotionForm.jsx', 'src/components/Layout.jsx', 'src/App.jsx', 'src/main.jsx' ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

