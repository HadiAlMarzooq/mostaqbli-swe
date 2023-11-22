import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Icon,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import AceEditor from "react-ace";
import { useState } from "react";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";

const runScript = async (code) => {
  const pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
  });

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
  const [code, setCode] = useState('print("Hello, mostaqbli!")');
  const [output, setOutput] = useState("اكتب كودك ياحلو");
  const mainDisclosure = useDisclosure();

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };
  const handleRunCode = async () => {
    try {
      const result = await runScript(code);
      setOutput(result);
      console.log("State updated with:", result); // Log right after setting the state
    } catch (err) {
      setOutput(`Error: ${err.toString()}`);
    }
  };

  return (
    <Box margin="1rem">
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
          🔍 مقدمة في هندسة البرمجيات
        </Heading>
        <Icon
          as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="brand.500"
          boxSize={6}
        />
      </Flex>
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
          style={{ width: "100%", minHeight: "200px" }}
        />
        <Button onClick={handleRunCode} colorScheme="blue" mt="1rem">
          تشغيل الكود
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
      </Collapse>
    </Box>
  );
};

export default CodingExperience;
