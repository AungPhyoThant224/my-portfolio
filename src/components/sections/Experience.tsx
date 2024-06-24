import {
  Box,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import experience from "../../data/experience";
import { secHeading, secText, stepperBorder } from "../../theme/colors";

const Experience = () => {
  const { colorMode } = useColorMode();
  const iconSize = useBreakpointValue({ base: "35px", md: "40px" });
  return (
    <>
      <Heading
        as={"h2"}
        fontSize={"3xl"}
        textAlign={"center"}
        paddingBottom={{ base: 4, lg: 8 }}
      >
        {parse(experience.title)}
      </Heading>
      <VStack align="start" spacing={4} w="full">
        {experience.steps.map((step, index) => (
          <HStack key={index} align="stretch" w="full" spacing={4}>
            <Box position="relative">
              <Box
                boxSize={iconSize}
                borderRadius="full"
                border="1px"
                padding={2}
                borderColor={stepperBorder()}
              >
                <Image
                  margin={"auto"}
                  src={colorMode === "dark" ? step.icon.dark : step.icon.light}
                  alt={step.icon.alt}
                />
              </Box>
              {index < experience.steps.length - 1 && (
                <Box
                  position="absolute"
                  top={`calc(${iconSize} + var(--chakra-space-4))`}
                  left="50%"
                  transform="translateX(-50%)"
                  width="1px"
                  height={`calc(100% - ${iconSize} - var(--chakra-space-4))`}
                  bg={stepperBorder()}
                />
              )}
            </Box>
            <VStack align="start" spacing={2} w="full">
              <Box>
                <Text
                  fontWeight="bold"
                  color={secText()}
                  fontSize={{ base: "lg", sm: "2xl" }}
                >
                  {parse(step.company)}
                </Text>
                <Text fontSize={{ base: "sm", sm: "md" }} color={secHeading()}>
                  {parse(step.position)}
                </Text>
              </Box>
              <UnorderedList spacing={2}>
                {step.details.map((detail, idx) =>
                  Array.isArray(detail) ? (
                    <List key={idx} styleType="disc" pl={8}>
                      {detail.map((subDetail, subIdx) => (
                        <ListItem key={subIdx}>
                          <Text
                            as="span"
                            whiteSpace="normal"
                            wordBreak="break-word"
                            fontSize={{ base: "lg", sm: "xl" }}
                          >
                            {parse(subDetail)}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <ListItem key={idx}>
                      <Text
                        as="span"
                        whiteSpace="normal"
                        wordBreak="break-word"
                        fontSize={{ base: "lg", sm: "xl" }}
                      >
                        {parse(detail)}
                      </Text>
                    </ListItem>
                  )
                )}
              </UnorderedList>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default Experience;
