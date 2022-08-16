export const removeComments = (text: string) => {
  const lines = text.split("\n");
  let deleteNext = false;

  const newLines = lines.map((line) => {
    if (line.includes("/")) {
      let index = line.indexOf("/");

      if (deleteNext) {
        const prev = line.charAt(index - 1);
        if (prev === "*") {
          if (line.charAt(index + 1) === " ") index++;
          line = line.slice(index + 1);
          deleteNext = false;
          return line;
        }
      }

      const next = line.charAt(index + 1);

      if (next === "/") {
        line = line.slice(0, index);
      } else if (next === "*") {
        deleteNext = true;
        line = line.slice(0, index);
      }
    }
    if (!deleteNext) return line;
  });

  //TODO: Loop over newLines and remove duplicate empty strings to tidy up

  return newLines.join("\n");
};
