import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

const Output = ({ text }: Props) => {
  return (
    <VStack gap={3}>
      <Heading as="h1">Your output:</Heading>
      <Box p={4} my={4} backgroundColor="gray.200">
        <Container
          fontFamily="mono"
          fontSize="sm"
          maxWidth="container.md"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {text ? text : "No text defined"}
        </Container>
      </Box>
      <HStack>
        <Button onClick={() => navigator.clipboard.writeText(text)}>
          Copy text to clipboard
        </Button>
      </HStack>
    </VStack>
  );
};

export default Output;
