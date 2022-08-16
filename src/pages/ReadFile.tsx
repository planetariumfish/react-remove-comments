import React from "react";
import {
  Center,
  Button,
  VStack,
  Heading,
  FormControl,
  HStack,
} from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import { useNavigate } from "react-router-dom";
import { removeComments } from "../utils/removeComments";

type Props = {
  callback: (str: string) => void;
};

const ReadFile = ({ callback }: Props) => {
  const [file, setFile] = React.useState<File>();
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
      <FormControl>
        <HStack>
          <FilePicker
            onFileChange={(fileList) => {
              setFile(fileList[0]);
            }}
            placeholder="Choose a .txt file"
            multipleFiles={false}
            accept="text/plain"
            hideClearButton={true}
          />
          <Button
            onClick={() => {
              getText();
              navigate("/output");
            }}
          >
            Process
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default ReadFile;
