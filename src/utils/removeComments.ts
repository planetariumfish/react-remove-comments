export const removeComments = (text: string) => {
  const lines = text.split("\n");
  let isComment = false;

  const newLines: string[] = [];

  lines.forEach((line) => {
    // if we're in the middle of a multiline comment, just toss the line
    if (isComment && !line.includes("/")) return;

    // line is "", or has no "/" characters, and we're not in the middle of a comment:
    if (!line || (!line.includes("/") && !isComment)) {
      newLines.push(line);
      return;
    }

    // line includes one or more "/" characters
    if (line.includes("/")) {
      // handling end of multiline comment at the end of the line
      if (isComment && line.endsWith("*/")) {
        isComment = false;
        return;
      }

      let cleanLine = ""; // for multiline comments

      for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) === "/") {
          // single line comment - just return the part before "//"
          if (line.charAt(i + 1) === "/") {
            // only add to result if there's something to push (don't push "")
            if (i > 0) newLines.push(line.slice(0, i));
            return;
          }
          // start of multiline comment - return part before "/*", toggle multiline comment on
          if (line.charAt(i + 1) === "*") {
            isComment = true;
            if (i > 0) cleanLine = line.slice(0, i);
          }
          // end of multiline comment - return part after "*/"
          if (line.charAt(i - 1) === "*") {
            isComment = false;
            if (line.charAt(i + 1) === " ") i++; // space after slash (nicer output)
            if (i < line.length) cleanLine += line.slice(i + 1);
          }
        }
      }
      // if we cut out a comment send the new line, if there were no comments, send the original
      if (cleanLine) newLines.push(cleanLine);
      else newLines.push(line);
    }
  });
  return newLines.join("\n");
};
