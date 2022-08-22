export const removeComments = (text: string) => {
  // we're going to push characters into this string if they're not inside comments
  let result = "";
  // comment state toggle
  let isComment = false;
  let isMultiline = false;

  for (let i = 0; i < text.length; i++) {
    // we're looking at each character and the next after that
    const char = text.charAt(i);
    const nextchar = text.charAt(i + 1);

    //comment start
    if (char === "/") {
      // single line comment
      if (nextchar === "/") isComment = true;
      // multiline comment
      if (nextchar === "*") {
        isComment = true;
        isMultiline = true;
      }
    }
    // multiline comment end
    if (char === "*") {
      if (nextchar === "/") {
        isComment = false;
        isMultiline = false;
        i++;
        // increment by one more if it's a space
        if (text.charAt(i + 1) === " ") i++;
        continue;
      }
    }
    // turn off single line comment at the end of the line
    if (char === "\n" && isComment && !isMultiline) {
      isComment = false;
    }

    if (!isComment) result += char;
  }

  return result;
};
