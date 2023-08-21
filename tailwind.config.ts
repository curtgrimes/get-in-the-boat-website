import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      body: "Crimson Text",
    },
    fontSize: {
      sm: ["16px", "24px"],
      base: ["18px", "24px"],
      lg: ["22px", "32px"],
      xl: ["32px", "42px"],
      "2xl": ["36px", "48px"],
      "3xl": ["58px", "58px"],
      "4xl": ["90px", "100px"],
    },
    spacing: {
      "0": "0rem",
      "4": "0.2222rem",
      "8": "0.4444rem",
      "12": "0.6667rem",
      "16": "0.8889rem",
      "24": "1.3333rem",
      "32": "1.7778rem",
      "38": "2.1111rem",
      "40": "2.2222rem",
      "48": "2.6667rem",
      "56": "3.1111rem",
      "80": "4.4444rem",
      "120": "6.6667rem",
      "text-gutter": "2.6667rem", // 48px
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    borderRadius: {
      DEFAULT: "2px",
      lg: "5px",
      xl: "25px",
      full: "9999px",
    },
    colors: {
      "primary-3": "#f5f4f9",
      "primary-2": "#eceaf4",
      "primary-1": "#c5bfdf",
      primary: "#523e9f",
      "primary+1": "#392485",
      "primary+2": "#2c1c68",
      "neutral-dark": "#29222b",
      "neutral-light": "#fff",
    },
  },
};
