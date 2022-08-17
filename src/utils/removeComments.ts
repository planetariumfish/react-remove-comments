export const removeComments = (text: string) => {
  const lines = text.split("\n");
  let deleteNext = false;

  const newLines: string[] = [];

  lines.forEach((line) => {
    if (line.includes("/")) {
      let index = line.indexOf("/");

      if (deleteNext) {
        const prev = line.charAt(index - 1);
        if (prev === "*") {
          if (line.charAt(index + 1) === " ") index++;
          line = line.slice(index + 1);
          deleteNext = false;
          newLines.push(line);
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
    if (!deleteNext) newLines.push(line);
  });

  return newLines.join("\n");
};
