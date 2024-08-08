// NOTE!! When testing functions, certain characters may not display correctly.
// This can depend on your OS as well as your version of Node.js. This is not critical, 
// so you can use your own examples in the tests.

// Task 1: Write a function that determines the length of a string

function findStringLength(str) {
  return str.length;
}

console.log("Task 1 ====================================");
console.log(
  'findStringLength("Hello, world!")',
  findStringLength("Hello, world!")
); // Outputs 13

// Task 2: Write a function that generates a string from characters based on their Unicode codes

function generateStringFromCharCode(code1, code2, code3, code4, code5) {
  return String.fromCharCode(code1, code2, code3, code4, code5);
}

console.log("Task 2 ====================================");
console.log(
  "generateStringFromCharCode(72, 101, 108, 108, 111)",
  generateStringFromCharCode(72, 101, 108, 108, 111)
); // Outputs "Hello"

// Task 3: Write a function that generates a string from characters based on their Unicode codes

function generateStringFromCodePoint(code1, code2, code3, code4) {
  return String.fromCodePoint(code1, code2, code3, code4);
}

console.log("Task 3 ====================================");
console.log(
  "generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)",
  generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)
); // Outputs "☃★♲你"

// Task 4: Write a function that outputs a string using String.raw

function rawString() {
  return String.raw`Hejka\t000A!`;
}

console.log("Task 4 ====================================");
console.log("rawString()", rawString()); // Outputs "Hejka\t000A!"

// Task 5: Write a function that concatenates two strings

function concatenateStrings(str1, str2) {
  return str1.concat(" ", str2);
}

console.log("Task 5 ====================================");
console.log(
  'concatenateStrings("Hello", "World!")',
  concatenateStrings("Hello", "World!")
); // Outputs "Hello World!"

// Task 6: Write a function that checks if a substring is contained within a string

function checkIfIncludes(mainStr, subStr) {
  return mainStr.includes(subStr);
}

console.log("Task 6 ====================================");
console.log(
  'checkIfIncludes("Hello, world!", "world")',
  checkIfIncludes("Hello, world!", "world")
); // Outputs true

// Task 7: Write a function that finds the index of a substring within a string

function findIndexOf(mainStr, subStr) {
  return mainStr.indexOf(subStr);
}

console.log("Task 7 ====================================");
console.log(
  'findIndexOf("Hello, world!", "world")',
  findIndexOf("Hello, world!", "world")
); // Outputs 7

// Task 8: Write a function that finds the last index of a substring within a string

function findLastIndexOf(mainStr, subStr) {
  return mainStr.lastIndexOf(subStr);
}

console.log("Task 8 ====================================");
console.log(
  'findLastIndexOf("Hello, world! Hello, universe!", "Hello")',
  findLastIndexOf("Hello, world! Hello, universe!", "Hello")
); // Outputs 14

// Task 9: Write a function that checks if a string starts with a specific substring

function checkIfStartsWith(mainStr, subStr) {
  return mainStr.startsWith(subStr);
}

console.log("Task 9 ====================================");
console.log(
  'checkIfStartsWith("Hello, world!", "Hello")',
  checkIfStartsWith("Hello, world!", "Hello")
); // Outputs true

// Task 10: Write a function that checks if a string ends with a specific substring

function checkIfEndsWith(mainStr, subStr) {
  return mainStr.endsWith(subStr);
}

console.log("Task 10 ====================================");
console.log(
  'checkIfEndsWith("Hello, world!", "world!")',
  checkIfEndsWith("Hello, world!", "world!")
); // Outputs true

// Task 11: Write a function that demonstrates the difference between the methods charCodeAt, codePointAt, charAt, at

function compareCharCodeAtAndCodePointAt(string, index) {
  let charAtResult = string.charAt(index);
  let atResult = string.at(index);
  let charCodeAtResult = string.charCodeAt(index);
  let codePointAtResult = string.codePointAt(index);
  return `charCodeAt:${charCodeAtResult}, codePointAt:${codePointAtResult}, charAt:${charAtResult}, at: ${atResult}`;
}

console.log("Task 11 ====================================");
console.log(
  'compareCharCodeAtAndCodePointAt("★", 0)',
  compareCharCodeAtAndCodePointAt("★", 0)
); // Outputs charCodeAt:9733, codePointAt:9733, charAt:★, at: ★

console.log(
  'compareCharCodeAtAndCodePointAt("a", 0)',
  compareCharCodeAtAndCodePointAt("a", 0)
); // Outputs  charCodeAt:97, codePointAt:97, charAt:a, at: a

console.log(
  'compareCharCodeAtAndCodePointAt("😀", 0)',
  compareCharCodeAtAndCodePointAt("😀", 0)
); // Outputs charCodeAt:55357, codePointAt:128512, charAt:�, at: �

// Task 12: Write a function that adds characters to the string either from the beginning or the end, depending on the value of the "side" argument.

function padString(original, length, padWith, side) {
  if (side === "start") { return original.padStart(length, padWith); }
  else if (side === "end") {return original.padEnd(length, padWith); }
  else { return "Error: side should be either 'start' or 'end'"}
}

console.log("Task 12 ====================================");
console.log(
  'padString("123", 5, "0", "start")',
  padString("123", 5, "0", "start")
); // Outputs "00123"
console.log('padString("123", 5, "0", "end")', padString("123", 5, "0", "end")); // Outputs "12300"
console.log(
  'padString("123", 5, "0", "middle")',
  padString("123", 5, "0", "middle")
); // Outputs "Error: side should be either 'start' or 'end'"

// Task 13: Write a function that removes spaces from the string either from the beginning, the end, or both sides, depending on the value of the "side" argument.

function trimString(original, side) {
  if (side === "start") { return original.trimStart(); }
  else if (side === "end") {return original.trimEnd(); }
  else if (side === "both") {return original.trim();}
  else { return "Error: side should be either 'start', 'end' or 'both'"};
}

console.log("Task 13 ====================================");
console.log('trimString(" 123 ", "start")', trimString(" 123 ", "start")); // Outputs "123 "
console.log('trimString(" 123 ", "end")', trimString(" 123 ", "end")); // Outputs " 123"
console.log('trimString(" 123 ", "both")', trimString(" 123 ", "both")); // Outputs "123"
console.log('trimString(" 123 ", "middle")', trimString(" 123 ", "middle")); // Outputs "Error: side should be either 'start', 'end' or 'both'"

// Task 14: Write a function that converts a string to either upper or lower case, depending on the value of the "caseType" argument.

function convertCase(original, caseType) {
  if (caseType === "upper"){ return original.toUpperCase();}
  else if (caseType === "lower") {return original.toLowerCase()}
  else { return "Error: caseType should be either 'upper' or 'lower'"} ;
}

console.log("Task 14 ====================================");
console.log('convertCase("abc", "upper")', convertCase("abc", "upper")); // Outputs "ABC"
console.log('convertCase("ABC", "lower")', convertCase("ABC", "lower")); // Outputs "abc"
console.log('convertCase("abc", "middle")', convertCase("abc", "middle")); // Outputs "Error: caseType should be either 'upper' or 'lower'"

// Task 15: Write a function that repeats a string a certain number of times

function repeatString(string, times) {
  return string.repeat(times);
}

console.log("Task 15 ====================================");
console.log('repeatString("abc", 3)', repeatString("abc", 3)); // Outputs 'abcabcabc'

// Task 16: Write a function that removes a part of a string between two indexes

function sliceString(string, startIndex, endIndex) {
  return string.slice(startIndex, endIndex);
}

console.log("Task 16 ====================================");
console.log(
  'sliceString("Hello, world!", 0, 5)',
  sliceString("Hello, world!", 0, 5)
); // Outputs 'Hello'

// Task 17: Write a function that removes a part of a string between two indexes using substring

function substringString(string, startIndex, endIndex) {
  return string.substring(startIndex, endIndex);
}

console.log("Task 17 ====================================");
console.log(
  'substringString("Hello, world!", 0, 5)',
  substringString("Hello, world!", 0, 5)
); // Outputs 'Hello'
