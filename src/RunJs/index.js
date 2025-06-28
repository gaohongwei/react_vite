/*
ROT-13 ("rotate by 13 places") is a simple cipher that replaces a letter with the 13th letter after it in the alphabet (wrapping around if necessary). In this question, we will consider a generalization of ROT-13 algorithm. We will allow rotation of any non-zero distance.

For example:
    ROT-1('abc') == 'bcd'
    ROT-3('hello') == 'khoor'
    ROT-1('z') == 'a'

Suppose you have a list of strings, e.g.,

    ['anyscale', 'hello', 'abc', 'def', 'a', 'i']

Write a program that returns the subset of words such that some rotated version of the word is also in the list. In this case, the program should return

    ['abc', 'def', 'a', 'i']

because ROT-3('abc') == 'def' and ROT-8('a') == 'i' (and similarly for 'def' and 'i').

*/
/*
  ar => sections by tength
  check ecah section,
  ['abc', 'def', 'acd'] =>  '011','011', '020'


*/

//const { diffieHellman } = require("crypto");

function fSubsetByLen(ar) {
  // ['abc', 'def', 'acd']
  // [['abc', 'def'], []]
  const dict = {};
  ar.forEach((item) => {
    const digit = fCharsToDigits(item);
    dict[digit] ||= [];
    dict[digit].push(item);
  });
  return Object.values(dict);
}

function fFindSubSet(ar) {
  const sectionByLen = {};
  ar.forEach((item) => {
    const len = item.lenth;
    sectionByLen[len] ||= [];
    sectionByLen[len].push(item);
  });
  return sectionByLen;
}

function fSolution(ar) {
  //
  const allSet = [];
  const sectionByLen = fFindSubSet(ar);
  const lens = Object.keys(sectionByLen);
  for (const len of lens) {
    const section = sectionByLen[len];
    const subsets = fSubsetByLen(section);
    allSet.push(subsets);
  }
  return allSet;
}

function fCharsToDigits(str) {
  // 'abc' => '011'
  const digits = [];
  let lastCh = str[0];
  for (let index = 0; index < str.length; index++) {
    const ch = str[index];
    const diff = ch.charCodeAt(0) - lastCh.charCodeAt(0);
    digits.push(diff);
    lastCh = ch;
  }
  return digits.join("");
}

const strs = ["abc", "ade"];
// 011, 031
for (const str of strs) {
  const out = fCharsToDigits(str);
  console.log(str, out);
}
