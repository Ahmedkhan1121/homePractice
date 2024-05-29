//Variable
//var
var name1 = "Ashar";
name1 = "Ahmed"; // Update Variable
var name1 ="Anas";  // redecraled
console.log(name1);
// let isCond = true;
// if(isCond){
//     var a = 45; // var scpoe is function scope
//     console.log(a)
// }else{
//     console.log("Error");
// }
// console.log(a);

//let 
// let name2 = "anas";
// name2 = "moiz";
// let name2 = "reger";
// let isCond2 = true;
// if(isCond2){
//     let a = 34; //let is a Block Scpoe
//     const b = 50;  // const is a block Scope
//     console.log(a);
// }else{
//     console.log("Error");
// }
// console.log(a);
// console.log(b);



//const 
// const name3 = "Sameer";
// const  name3 = "wegw";

// Data Types in typescript
// number
// string
// boolean
// object
// null
// undefined

// number
let str = "Hello"; //implicit
let num:number = 67;  // explicit
// Num to String
let numStr =  num.toString();
console.log(typeof numStr);
// Fied Decimal Value
let numTwo:number = 45.5555555;
let numTwoFixed =  numTwo.toFixed(2);
console.log( numTwoFixed);
// Convert to Number
let fixedNum = Number(numTwoFixed);
fixedNum = +numTwoFixed;
console.log(typeof fixedNum);
//valueOf
let numValue = fixedNum.valueOf();
console.log( numValue);
let numExpon = numValue.toExponential();
console.log(typeof numExpon);

 // boolean
 let isTrue = true;
 let isFalse = false;

// string
let str1 = "Hello World";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

