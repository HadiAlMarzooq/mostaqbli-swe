import React from "react";
import { ChakraProvider, Container, VStack, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import theme from "./theme";
import Header from "./components/Header";
import EducationalContent from "./components/EducationalContent";
// import Quiz from "./components/Quiz";
// import MindfulnessSection from "./components/MindfulnessSection";
import ResourcesSection from "./components/ResourcesSection";
import CodingExperience from "./components/CodingExperience";
// import ForumSection from "./components/ForumSection";
// import ProjectExamples from "./components/ProjectExamples";
// import CareerGuidance from "./components/CareerGuidance";
// import Footer from "./components/Footer";

const MotionContainer = motion(Container);

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack minHeight="100vh" justify="space-between" width="100%">
        <MotionContainer
          maxW="container.xxl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          backgroundColor="brand.100"
        >
          <Header />
          <EducationalContent />
          <CodingExperience />

          <ResourcesSection />
          {/* <ForumSection /> */} 

        </MotionContainer>

        <Container maxW="container.xxl">
          {/* <Footer /> */}
          <Flex
            textAlign="center"
            paddingTop="0.5rem"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xs">
              Ⓒ جميع حقوق النشر للنطاقات تحت hadi.zone محفوظة لـ هادي المرزوق
            </Text>
            <Link href="https://github.com/HadiAlmarzooq" isExternal>
              <Icon as={FaGithub} mx={1} />
            </Link>
          </Flex>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
