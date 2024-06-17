import { As, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  id: string;
  maxWidth: string;
  background: string;
  as: As;
  children: ReactNode;
}

const Section = ({ id, maxWidth, background, as, children }: Props) => {
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
        <Box id={id} backgroundColor={background} as={as}>
          <Box
            maxWidth={maxWidth}
            margin={"auto"}
            paddingX={5}
            paddingY={as === "footer" ? 0 : 10}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Section;
