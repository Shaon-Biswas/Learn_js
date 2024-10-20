// importent link....

// https://262.ecma-international.org/#sec-ecmascript-data-types-and-values



let name="shaon"
let age=22

console.log(`my name is ${name} and my age is ${age}`);                         // an way to print string..........
console.log(`my name is ${name.toUpperCase()} and my age is ${age}`);           // it will print the name in upper case....

let myName = new String("Pappu");                                               // another way to declare string.....






//___________ string.at()   ____________
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"







// _______________string.charAt()__________________________

const sentence1 = 'The quick brown fox jumps over the lazy dog.';

const index1 = 4;

console.log(`The character at index ${index1} is ${sentence1.charAt(index1)}`);
// Expected output: "The character at index 4 is q"




//_________________string.slice()________________
console.log(sentence1.slice(31));
// Expected output: "the lazy dog."

console.log(sentence1.slice(4, 19));
// Expected output: "quick brown fox"

console.log(sentence1.slice(-4));
// Expected output: "dog."

console.log(sentence1.slice(-9, -5));
// Expected output: "lazy"









// read about string method from given link..........
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// toUpperCase, toLowerCase, trim, slice, replace, substring   etc......