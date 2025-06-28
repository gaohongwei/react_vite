/*
cat file.txt | grep "pattern" --context n
==============
pattern= it
n = 2

file.txt
this
that
it
was
here

this
that
it
was
here

n = 1
that
it
was

==============

this | [this]
it | this, it --> [] | nlc = 2
was | was nlc = 1
here | here nlc = 0

this
it
was
here


===========

it
that
it
was
here

it
that
it
was
here

==============

file=["", ""]
for word in file:
  f(word)
    // print or not print the word

*/

function fPrinntArray(lines) {
  lines.forEach((line) => console.log(line));
}

function fGetLines(arLines, pattern, nContext) {
  const lastNLine = [];
  let nextLineCount = 0;
  arLines.forEach((line, index) => {
    if (line === pattern) {
      fPrinntArray(lastNLine);
      console.log(line);
      nextLineCount = nContext;
      lastNLine.length = 0;
    } else if (nextLineCount > 0) {
      console.log(line);
      nextLineCount -= 1;
    } else {
      if (lastNLine.length >= nContext - 1) lastNLine.unshift();
      console.log("will push");
      lastNLine.push(line);
    }
  });
}

const pattern = "it";
const nContext = 1;
const arLines = ["this", "that", "it", "was", "here"];
fGetLines(arLines, pattern, nContext);
