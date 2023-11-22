import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      padding="1.5rem"
      bg="brand.300" // Adjust the background color as per your theme
      color="white"
    >
      <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight">
        هندسة البرمجيات
      </Text>
      <Text fontSize="sm" mt="-4" textAlign="center">
      *يسمونا الهكرجية 😉
      </Text>

      <Player
        src="./animation.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      />

      <Text fontSize="xl" mt="4" textAlign="center">
        مرحباً بكم في ركننا! 🌟 نتطلع لاستكشاف مغامرات عالم البرمجة معكم! 🚀👨‍💻👩‍💻
      </Text>
    </Box>
  );
};

export default Header;
