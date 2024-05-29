//string
let str3:string = "Hello World";
//str3[0] = "e";  // string is immutable
// Property
// length
console.log(str3.length);

// Method
// toUpperCase()
let strUpper =  str3.toUpperCase();
console.log(strUpper);
// toLowerCase()
let strLower = str3.toLowerCase();
console.log(strLower);
str3.toLowerCase();  // its can't update because string are immutable 
console.log(str3);
//slice()
let str3Copy = str3.slice(6,11);
console.log(str3Copy);
//concat()
let strOne = "Hello ";
let strTwo = "World";
let strConcat = strOne.concat(strTwo);
console.log(strConcat);
//valueOf()
let strValue = "1234567";
console.log(strValue.valueOf());
//replace()
let strReplace = "Hello JavasCript";
let strReplaceValue = strReplace.replace(/javascript/i,"Typescript");
console.log(strReplaceValue);
let strReplace2 = "Hello javascript Javascript Javascript Javascript";
let strReplaceValue2 = strReplace2.replace(/Javascript/ig,"Typescript");
console.log(strReplaceValue2);
// indexOf()
let indexStr = "Hello Javascript";

console.log(indexStr.indexOf("Javascript"));
// lastIndexOf()
let lastIndexStr = "Hello Javascript Javascript";
console.log(lastIndexStr.lastIndexOf("Javascript"));
//trim()
let whiteSpaceStr = "     Hello World             ";
let trimStr = whiteSpaceStr.trim();
console.log(trimStr);
//includes()
let sentence = 'Cloud Applied Generative AI Engineer';
let includesSentence = sentence.includes("O".toLowerCase());
console.log(includesSentence);
let strInclde = 'P';
console.log(strInclde.toLowerCase().includes("P".toLowerCase()));
// startsWith()
let startIncSent = sentence.startsWith("c".toUpperCase());
console.log(startIncSent);
// endsWith()
let endIncSent = sentence.endsWith("r");
console.log(endIncSent);
//charAt()
let charAtStr = "Ahmed Raza";
console.log(charAtStr.charAt(6));



