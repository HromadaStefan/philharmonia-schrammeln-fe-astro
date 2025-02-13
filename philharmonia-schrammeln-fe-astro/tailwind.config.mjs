import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        basetextcolor: "#a38037",
        basebackgroundcolor: "#f3f2ee",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), flowbite.plugin()],
};
