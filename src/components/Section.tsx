import { As, Box, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  id: string;
  maxWidth: string;
  minHeight?: string;
  display?: string;
  background: string;
  paddingTop?:
    | ResponsiveValue<
        | number
        | (string & {})
        | "inherit"
        | "-moz-initial"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
      >
    | undefined;
  paddingBottom?:
    | ResponsiveValue<
        | number
        | (string & {})
        | "inherit"
        | "-moz-initial"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
      >
    | undefined;
  as: As;
  children: ReactNode;
}

const Section = ({
  id,
  maxWidth,
  minHeight,
  display,
  background,
  paddingTop,
  paddingBottom,
  as,
  children,
}: Props) => {
  return (
    <>
      {as === "nav" ? (
        <Box
          id={id}
          position={"fixed"}
          width={"100vw"}
          zIndex={1}
          backgroundColor={background}
          as={as}
        >
          <Box maxWidth={maxWidth} margin={"auto"} paddingX={5} paddingY={0}>
            {children}
          </Box>
        </Box>
      ) : (
        <Box
          id={id}
          minHeight={minHeight ? minHeight : "auto"}
          display={display}
          backgroundColor={background}
          as={as}
        >
          <Box
            maxWidth={maxWidth}
            margin={"auto"}
            paddingX={5}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Section;
