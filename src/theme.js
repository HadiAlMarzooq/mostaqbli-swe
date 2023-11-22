import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#FFE5E5", // Lightest purple
    200: "#FF6AC2", // Light purple
    300: "#B931FC", // Medium purple
    400: "#5D12D2", // Dark purple
    // Add more shades if needed
  },
  gray: {
    50: "#f7f7f7",
    100: "#e1e1e1",
    200: "#cfcfcf",
    300: "#b1b1b1",
    400: "#9e9e9e",
    500: "#7e7e7e",
    600: "#626262",
    700: "#515151",
    800: "#3b3b3b",
    900: "#222222",
  },
};

const fonts = {
  heading: "'Tajawal', sans-serif",
  body: "'Tajawal', sans-serif",
};

const theme = extendTheme({
  colors,
  fonts,
  direction: "rtl",
});

export default theme;
