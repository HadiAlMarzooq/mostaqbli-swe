import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Collapse,
  useDisclosure,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

const EducationalContent = () => {
  const mainDisclosure = useDisclosure();

  return (
    <Box margin="1rem">
      <Flex
        align="center"
        justify="space-between"
        onClick={mainDisclosure.onToggle}
        cursor="pointer"
        bg="brand.200" // Adjust the background color as per your theme
        p={4}
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: "brand.300", // Adjust the hover background color
        }}
      >
        <Heading size="lg" color="brand.100">
          🔍 مقدمة في هندسة البرمجيات
        </Heading>
        <Icon
          as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="brand.500"
          boxSize={6}
        />
      </Flex>
      <Collapse in={mainDisclosure.isOpen} animateOpacity>
        <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
          <Heading size="md" color="brand.400" mb={3}>
            نظرة عامة على هندسة البرمجيات
          </Heading>
          <Text mb={3}>
            هندسة البرمجيات هي تخصص يجمع بين مبادئ الهندسة وعلم الكمبيوتر لتطوير
            برامج قوية وفعالة. يركز هذا المجال على تصميم وتطوير البرمجيات، مع
            التأكيد على إدارة المشاريع، جودة البرمجيات، واختبارها. تعد هندسة
            البرمجيات جزءاً لا يتجزأ من العديد من الصناعات، مما يوفر فرص عمل
            واسعة ومتنوعة لخريجيها.
          </Text>
          <UnorderedList>
            <ListItem>
              تطوير برامج تفاعلية ومبتكرة - إنشاء تطبيقات تلبي متطلبات
              المستخدمين وتحسن تجربتهم
            </ListItem>
            <ListItem>
              فهم عميق لأساسيات البرمجة وأنظمة التشغيل - استكشاف لغات البرمجة
              المختلفة ومبادئ نظم التشغيل
            </ListItem>
            <ListItem>
              تقنيات متقدمة في إدارة قواعد البيانات والأمن السيبراني - تطبيق
              أحدث الأساليب في تأمين البيانات والمعلومات
            </ListItem>
            <ListItem>
              تطبيق مبادئ البرمجة الكائنية ونماذج التصميم - تصميم برامج قابلة
              للتوسعة والصيانة
            </ListItem>
            <ListItem>
              تقنيات الحوسبة السحابية والبيانات الكبيرة - استكشاف البنية التحتية
              للحوسبة السحابية وتحليل البيانات الضخمة
            </ListItem>
          </UnorderedList>
          <Heading size="md" color="brand.400" my={3}>
            المواد الأساسية
          </Heading>
          <UnorderedList>
            <ListItem>لغات البرمجة</ListItem>
            <ListItem>
              بنية البيانات والخوارزميات - تأسيس مهارات حل المشكلات
            </ListItem>
            <ListItem>أساسيات تطوير الويب والتطبيقات المتنقلة</ListItem>
            <ListItem>نظرية أنظمة التشغيل وقواعد البيانات</ListItem>
            <ListItem>مبادئ الذكاء الاصطناعي وتعلم الآلة</ListItem>
          </UnorderedList>
          <Heading size="md" color="brand.400" my={3}>
            المواضيع المتقدمة
          </Heading>
          <UnorderedList>
            <ListItem>البرمجة المتزامنة والمتوازية</ListItem>
            <ListItem>تقنيات تطوير البرمجيات المتقدمة</ListItem>
            <ListItem>أمن المعلومات والشبكات</ListItem>
            <ListItem>تطوير نظم الذكاء الاصطناعي والتعلم الآلي</ListItem>
            <ListItem>التحليل الإحصائي وتعدين البيانات</ListItem>
          </UnorderedList>
          <Heading size="md" color="brand.400" my={3}>
            المهارات العملية
          </Heading>
          <UnorderedList>
            <ListItem>أفضل الممارسات في كتابة الكود وتصحيح الأخطاء</ListItem>
            <ListItem>استخدام أدوات التحكم في الإصدارات مثل Git</ListItem>
            <ListItem>التعاون في فرق التطوير وإدارة المشاريع</ListItem>
            <ListItem>بناء وتقديم مشاريع برمجية نهائية</ListItem>
            <ListItem>تطوير البرمجيات بنهج الاختبار أولاً (TDD)</ListItem>
          </UnorderedList>
          <Heading size="md" color="brand.400" my={3}>
            الإرشاد المهني
          </Heading>
          <UnorderedList>
            <ListItem>فرص التدريب الداخلي والتعاون العملي</ListItem>
            <ListItem>بناء شبكات المهنية وتطوير الذات</ListItem>
            <ListItem>إعداد السيرة الذاتية وبناء المحفظة البرمجية</ListItem>
            <ListItem>استراتيجيات البحث عن عمل في مجال البرمجة</ListItem>
            <ListItem>التحضير لمقابلات العمل الفنية والبرمجية</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>
    </Box>
  );
};

export default EducationalContent;
