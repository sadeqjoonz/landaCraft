// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       fontFamily:{
//         cinzel: 'cinzel'
//       },
//       colors: {
//         primary: {
//         DEFAULT: '#6B6B53',
//         Tint1: '#F9F9EB',
//         Tint2: '#F0F2CF',
//         Tint3: '#CACC90',
//         Shade1: '#999B59',
//         Shade2: '#595B34',
//         Shade3: '#30311C',
//       },
//       Gray: {
//         DEFAULT: "#161613",
//         Tint1: "#E8E8E7",
//         Tint2: "#D0D0D0",
//         Tint3: "#B9B9B8",
//         Shade1: "#A2A2A1",
//         Shade2: "#737371",
//         Shade3: "#454542"
// ,
//       }
//     },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cinzel: 'cinzel',
        openSans : 'openSans'
      },

      colors: {
        "primary": {
          DEFAULT: '#6B6B53',
          Tint1: '#F9F9EB',
          Tint2: '#F0F2CF',
          Tint3: '#CACC90',
          Shade1: '#999B59',
          Shade2: '#595B34',
          Shade3: '#30311C',
        },

        "Gray": {
          DEFAULT: "#161613",
          Tint1: "#E8E8E7",
          Tint2: "#D0D0D0",
          Tint3: "#B9B9B8",
          Shade1: "#A2A2A1",
          Shade2: "#737371",
          Shade3: "#454542"
        },
      },
    },
  },
  plugins: [],
};
