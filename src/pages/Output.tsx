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
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
};

const Output = ({ text }: Props) => {
  const navigate = useNavigate();
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
        <Button onClick={() => navigate("/")}>Go back</Button>
      </HStack>
    </VStack>
  );
};

export default Output;
