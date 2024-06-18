import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Terminal = ({ title, children }: Props) => {
  return (
    <Box
      className="custom-box-shadow"
      w="100%"
      maxW="800px"
      bg="gray.800"
      borderRadius="xl"
      border={"1px"}
      borderColor={"white"}
      overflow="hidden"
    >
      {/* Title Bar */}
      <Flex bg="gray.700" p={2} align="center" justify="space-between">
        <Flex>
          <Box
            w={3}
            h={3}
            bg="red.500"
            borderRadius="50%"
            mr={2}
            _hover={{ bg: "red.700" }}
            cursor="pointer"
          />
          <Box
            w={3}
            h={3}
            bg="yellow.500"
            borderRadius="50%"
            mr={2}
            _hover={{ bg: "yellow.700" }}
            cursor="pointer"
          />
          <Box
            w={3}
            h={3}
            bg="green.500"
            borderRadius="50%"
            _hover={{ bg: "green.700" }}
            cursor="pointer"
          />
        </Flex>
        <Text color="gray.300" fontSize="sm">
          {title}
        </Text>
        <Box w="12"></Box>
      </Flex>

      {/* Terminal Content */}
      {children}
    </Box>
  );
};

export default Terminal;
