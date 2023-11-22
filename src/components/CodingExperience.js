import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Icon,
  Collapse,
  useToast,
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CopyIcon,
  EditIcon,
} from "@chakra-ui/icons";
import AceEditor from "react-ace";
import { useState } from "react";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";

// Function to run Python script
const runScript = async (code) => {
  const pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
  });

  // Redefining print function for capturing output
  pyodide.runPython(`
    import builtins
    output = ''
    def print(*args, **kwargs):
        s = ' '.join(map(builtins.str, args)) + '\\n'
        builtins.getattr(builtins, 'print')(s)
        globals()['output'] += s
  `);

  await pyodide.runPythonAsync(code);
  const output = pyodide.globals.get("output");
  return output;
};

const CodingExperience = () => {
  const [code, setCode] = useState('print("مرحبًا بك في عالم البرمجة!")'); // Default code in the editor
  const [output, setOutput] = useState("اكتب كودك هنا وشاهد النتائج"); // Default output message
  const mainDisclosure = useDisclosure();
  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard(code);
  const exampleCodes = [
    { description: "طباعة اسمك", code: 'print("اسمي هو [اسمك]")' },
    { description: "جمع رقمين", code: "print(5 + 3)" },
    {
      description: "طباعة نتيجة جمع متغيرين",
      code: "x = 7\ny = 8\nprint(x + y)",
    },
    // Add more examples as needed
  ];
  // Handling code changes in the editor
  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  // Handling the execution of code
  const handleRunCode = async () => {
    try {
      const result = await runScript(code);
      setOutput(result);
      toast({
        title: "تم تنفيذ الكود بنجاح",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setOutput(`خطأ: ${err.toString()}`);
      toast({
        title: "خطأ في تنفيذ الكود",
        description: err.toString(),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const loadExample = (exampleCode) => {
    setCode(exampleCode);
  };

  return (
    <Box margin="1rem">
      {/* Header with collapsible content */}
      <Flex
        align="center"
        justify="space-between"
        onClick={mainDisclosure.onToggle}
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
          🐍 تجربة البرمجة مع بايثون
        </Heading>
        <Icon
          as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="brand.500"
          boxSize={6}
        />
      </Flex>

      {/* Collapsible editor and output area */}
      <Collapse in={mainDisclosure.isOpen} animateOpacity>
        <AceEditor
          mode="python"
          theme="github"
          value={code}
          onChange={handleCodeChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{ width: "100%", minHeight: "200px", margin:"1rem"} }
        />
        <Button onClick={handleRunCode} colorScheme="blue" m="1rem">
          تشغيل الكود
        </Button>
        <Button onClick={onCopy} colorScheme="green" ml="2" m="1rem">
          {hasCopied ? (
            "تم النسخ!"
          ) : (
            <>
              <CopyIcon mr="2" />
              نسخ الكود
            </>
          )}
        </Button>
        <Box mt="2rem">
          <Text fontSize="lg">الناتج:</Text>
          <Box
            p="1rem"
            bg="gray.100"
            borderRadius="md"
            minHeight="100px"
            mt="1rem"
            whiteSpace="pre-wrap"
          >
            {output}
          </Box>
        </Box>
        <Box mt="4rem">
          <Heading size="md" mb="2rem">
            أمثلة تعليمية:
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            justify="space-between"
          >
            {exampleCodes.map((example, index) => (
              <Box
                key={index}
                p="4"
                bg="gray.50"
                borderRadius="md"
                boxShadow="md"
                mb="4"
                w={{ base: "100%", md: "30%" }}
                _hover={{ bg: "gray.100" }}
              >
                <Flex align="center" mb="2">
                  <EditIcon color="blue.500" mr="2" />
                  <Text fontWeight="bold">{example.description}</Text>
                </Flex>
                <Box bg="white" p="3" borderRadius="md" boxShadow="inner">
                  <Text as="pre" color="gray.700">
                    {example.code}
                  </Text>
                </Box>
                <Button
                  colorScheme="blue"
                  mt="2"
                  size="sm"
                  onClick={() => {
                    loadExample(example.code);
                    onCopy();
                  }}
                >
                  <CopyIcon mr="2" />
                  نسخ
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CodingExperience;
