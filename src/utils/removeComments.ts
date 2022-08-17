export const removeComments = (text: string) => {
  // Note: Not doing a full parser, just going line by line
  // Handling only most common cases and not edge cases
  const lines = text.split("\n");
  let insideMultilineComment = false;

  const newLines: string[] = [];

  lines.forEach((line) => {
    // handle comment at start of line
    if (line.startsWith("//")) return;

    // handle single line "multiline" comment and start of line
    if (line.startsWith("/*")) {
      if (line.endsWith("*/")) return;
      insideMultilineComment = true;
      return;
    }

    // handle comments in the middle of the line
    if (line.includes("/")) {
      let index = line.indexOf("/");

      if (insideMultilineComment) {
        const prev = line.charAt(index - 1);
        if (prev === "*") {
          if (index === line.length - 1) return; // end of a line
          if (line.charAt(index + 1) === " ") index++;
          line = line.slice(index + 1);
          insideMultilineComment = false;
        } else return;
      }

      const next = line.charAt(index + 1);

      if (next === "/") {
        line = line.slice(0, index);
      } else if (next === "*") {
        insideMultilineComment = true;
        // handle single line "multiline" comment in the middle of the line.
        if (line.endsWith("*/")) insideMultilineComment = false;
        line = line.slice(0, index);
        newLines.push(line);
        return;
      }
    }
    if (!insideMultilineComment) newLines.push(line);
  });

  return newLines.join("\n");
};
