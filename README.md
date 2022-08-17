# React Remove Comments

This is a simple app in React that takes an uploaded .txt file, strips out comments, and displays the result.

## Cases handled

`//` single line comments:

- at the start of a line
- in the middle of a line

`/* */` multiline comments:

- as a single line comment at the start of a line
- as a single line comment in the middle of a line
- at the start of a line
- from the middle of a line
- ending at the end of a line
- ending in the middle of a line

Not handling:

- complex edge cases
- using `//`, `/*`, and `*/` as strings (they are treated the same as comment markers)

## Technologies

Set up using:

- Vite: v3.0.7
- React: v18.2.0
- TypeScript: v4.6.4
- React Router: v6
- Chakra UI: v2.2.8

## Status

Project is: _probably done_

## To run:

Clone the repository and `cd` into it,
run `yarn install`,
run `yarn dev`
