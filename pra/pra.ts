// Question #1  
// Print a table of 5 using for loop   


for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${i*5}`);
}

// Question #2 
// Print the factorial of 5 using recursive function

let factorial1=(n:number):number=>{
    if(n<1){
        return 1;
    }else{
        return n * factorial1(n-1);
    }
}
console.log(factorial1(5));
//5*4*3*2*1
//10*9*8*7*6*5*4*3*2*1


// Question #3
// Print * like this
// *
// **
// ***
// ****
// *****
// using for loop
let star =""
 for(let i=1; i<=5; i++){
      star+="*"
    console.log(star);
 }



// Question #4
// Find the max number in an array

let arr1:number[]=[2,4,12,5];
//Using Math.max()with spread Operator
let maxValueInArr:number = Math.max(...arr1); //[2,4,12,5] =>  2,4,12,5
console.log(maxValueInArr);
// let redu=arr1.reduce((prev,curr)=>{
//     if(prev> curr){
//         return prev;
//     }else{
//         return curr
//     }
    
// })
// console.log(redu);

// Question #5
// Write a for loop and print number 1 to 100 if number is in table 3 print fizz with number if is in table 5 print buzz with number if number is in 5 and 3 print fizzbuzz with number



for(let i=1; i<=100; i++){
    if(i%3===0 ){
        console.log(`fizz`);
    }else if(i%5===0){
        console.log(`buzz`);
    }else if(i%3===0 && i%5===0){
        console.log( `fizz buzz`);
    }else{
        console.log(i);
    }
}

// Question #06
// Create an array with multiple data types like string number and Boolean and filter the array mean array will return only string elements

let multipleTyp:(string|number|boolean|undefined)[]=['Ahmed', 3 ,true,undefined];
let savemultipleTyp=multipleTyp.filter((e,i,a)=>{
    return typeof e === 'string'
})
console.log(multipleTyp);


// Question #07
// Create a function and
// Find the longest word in a string for example 
// "my name is Sam Curran " 
// Find the longest word in this string





// Question #08
// Convert string to array without split method

// let person:string='ahmed';
// console.log(pers);

// Question #09
// Create a array of object


// Question #10
// Create a hoisting function and hoisting variable

// Question #11
// What is Anonymous function

// Question #12 
// Create an arrow function with rest parameters

// Question #13
// Sort an array of numbers without sorting 

// Question #14
// Create a function and find a prime number

// Question #15
// Find minimum number in an array

// Question #16 
// How to generate a random number

// Question #17 
// How to round of  a decimal number

// Question #18
// Create a function and compare the arrays if both are equal print true otherwise false


// Question #19
// Calculate the sum of array of numbers without reduceethod