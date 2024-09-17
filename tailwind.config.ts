import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        grayPrimary: "#3A5F56",
        graySecondary: "#292C32",
        heroBg: "#F4F3F0",
        redPrimary: "#DB343B",
      },
      backgroundImage: {
        "top-right-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(58, 95, 86, 0.55) 0%, rgba(58, 95, 86, 0) 100%)",
        "bottom-left-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(184, 125, 88, 0.8) 0%, rgba(184, 125, 88, 0) 100%)",
        "services-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(58, 95, 86, 0.376) 0%, rgba(58, 95, 86, 0) 100%)",
        "store-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(219, 52, 59, 0.296) 0%, rgba(219, 52, 59, 0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
