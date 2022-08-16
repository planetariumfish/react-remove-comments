import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Output from "./pages/Output";
import ReadFile from "./pages/ReadFile";

function App() {
  const [text, setText] = useState<string>("");

  return (
    <Center width="100vw" mt={5}>
      <Routes>
        <Route
          path="/"
          element={<ReadFile callback={(str) => setText(str)} />}
        />
        <Route path="/output" element={<Output text={text} />} />
      </Routes>
    </Center>
  );
}

export default App;
