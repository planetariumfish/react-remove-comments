import React from "react";
import {
  Button,
  VStack,
  Heading,
  FormControl,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import { useNavigate } from "react-router-dom";
import { removeComments } from "../utils/removeComments";

type Props = {
  callback: (str: string) => void;
};

const ReadFile = ({ callback }: Props) => {
  const [file, setFile] = React.useState<File>();
  const [invalid, setInvalid] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const getText = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      if (text) callback(removeComments(text as string));
    };
    if (file) reader.readAsText(file);
  };

  return (
    <VStack gap={5}>
      <Heading as="h1">React Remove Comments</Heading>
      <FormControl isInvalid={invalid}>
        <HStack>
          <FilePicker
            onFileChange={(fileList) => {
              setInvalid(false);
              setFile(fileList[0]);
            }}
            placeholder="Choose a .txt file"
            multipleFiles={false}
            accept="text/plain"
            hideClearButton={true}
          />
          <Button
            onClick={() => {
              if (!file) {
                setInvalid(true);
                return;
              }
              getText();
              navigate("/output");
            }}
          >
            Process
          </Button>
        </HStack>
        {invalid && <FormErrorMessage>Please choose a file</FormErrorMessage>}
      </FormControl>
    </VStack>
  );
};

export default ReadFile;
