// ResourcesSection.js
import React from "react";
import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Collapse,
  useDisclosure,
  Icon,
  Flex
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ResourcesSection = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box margin="1rem">
      {/* Header with collapsible content */}
      <Flex
        align="center"
        justify="space-between"
        onClick={onToggle}
        cursor="pointer"
        bg="brand.200"
        p={4}
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: "brand.300",
        }}
      >
        <Heading size="lg" color="brand.100">
          📘 الموارد لطلاب هندسة البرمجيات
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="brand.500"
          boxSize={6}
        />
      </Flex>

      {/* Collapsible content area */}
      <Collapse in={isOpen} animateOpacity>
        <List spacing={3} mt="4" dir="rtl">
          <ListItem>
            <Link href="https://kfupm.edu.sa" isExternal>
              جامعة الملك فهد للبترول والمعادن - موارد هندسة البرمجيات
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.iau.edu.sa" isExternal>
              جامعة الإمام عبد الرحمن بن فيصل - قسم هندسة البرمجيات
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.coursera.org" isExternal>
              كورسيرا - دورات تعليمية عبر الإنترنت في مجال البرمجة والتكنولوجيا
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.udemy.com" isExternal>
              يوديمي - دورات في هندسة البرمجيات وتطوير الويب
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.stackoverflow.com" isExternal>
              ستاك أوفرفلو - منتدى لطرح الأسئلة والإجابة عنها في مجال البرمجة
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.github.com" isExternal>
              جيت هب - لاستكشاف مشاريع البرمجة والتعاون مع مطورين آخرين
            </Link>
          </ListItem>
          {/* Add more resource links as required */}
        </List>
      </Collapse>
    </Box>
  );
};

export default ResourcesSection;
