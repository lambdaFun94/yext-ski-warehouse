// The following import is the path to where the component source code lives
const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{js,jsx}",
    // tailwind is applied to the components by adding the component path here
    ComponentsContentPath,
  ],
  theme: {
    // the default theme is extended with custom styling used by the components
    extend: {
      colors: {
        primary: "var(--primary-color, #2563eb)",
        "primary-light": "var(--primary-color-light, #dbeafe)",
        "primary-dark": "var(--primary-color-dark, #1e40af)",
        neutral: "var(--neutral-color, #4b5563)",
        "neutral-light": "var(--neutral-color-light, #9ca3af)",
        "neutral-dark": "var(--neutral-color-dark, #1f2937)",
      },
      borderRadius: {
        cta: "var(--cta-border-radius, 1rem)",
      },
      animation: {
        snowflakes: "snowflakes 3s infinite linear",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          "0%": { transform: "rotate(0deg)", "stroke-dashoffset": 204 },
          "50%": { transform: "rotate(45deg)", "stroke-dashoffset": 52 },
          "100%": { transform: "rotate(360deg)", "stroke-dashoffset": 204 },
        },
        snowflakes: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
