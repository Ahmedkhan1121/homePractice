// // //Array
// // // Array is collection of items
// // let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// // console.log(week);
// // // type of array
// // console.log(typeof week);
// // // pair of key and value is object
// // // key of Array is  Array ke element ka index
// // // value of Array is Array ke element 
// // week[0] = "Mon";   // Array is mutable
// // console.log(week);
// // // Properties of Array
// // //length
// // console.log(week.length);
// // Methods of Array
// let fruits = ["Apple","Banana","Orange","Kiwi","Mango"];
// //pop()
// let popFruits =  fruits.pop();   //remove from last and return the value
// console.log(fruits);
// console.log(popFruits);
// //push()
// let pushFruit = fruits.push("Watermelon"); // add from last and return the new length of Array
// console.log(fruits);
// console.log(pushFruit);
// // shift()
// let shiftFruit =  fruits.shift();   //remove from start and return the value
// console.log(fruits);
// console.log(shiftFruit);
// //unshift()
// let unshiftFruit =  fruits.unshift("Peach");  // add from start and return the new length of Array
// console.log(fruits);
// console.log(unshiftFruit);
// //splice();
// // iske zariya hum anywhere of Array Add and Remove Element and return remove values in an Array
// let spliceFruit =  fruits.splice(2,2,"Pineapple","Guava");  //start,deleteCount,element add
// console.log(fruits);
// console.log(spliceFruit);
// let sports = ["Cricket","Football","Baseket Ball"];
// let spliceFruit2 =  sports.splice(1,0,"Tennis");  //agr hum splice ke through sirf element add krwa rhe ha to wo empty array return kre ga 
// console.log(sports);
// console.log(spliceFruit2);
// //slice()
// let studentList = ["Ashar","Anas","Sammer","Ahmed"];
// let copyStudentList = studentList.slice(1,3);
// copyStudentList.pop();
// console.log(copyStudentList);
// console.log(studentList);
// //concat()
// // ye 2 Arrays ko milata ha or ek new Array return krta ha
// let carName = ["Bently","Fortuner","BMW","Ferrari"];
// let carModel = ["Continental GT","Legender","i7","Roma"];
// let carsFeatures =  carName.concat(carModel);
// console.log(carsFeatures);
// carsFeatures.pop();
// console.log(carsFeatures);
// console.log(carModel);
// console.log(carName);
// // toString()
// let arrToStr = carName.toString();
// console.log(arrToStr);
// //indexOf()
// let arrIndex = [10,20,30,40,50,60,70];
// let arrIndexOf = arrIndex.indexOf(400);
// console.log(arrIndexOf);
// //lastIndexOf()
// let arrLastIndex = [10,20,30,40,50,60,70,30];
// let arrLastIndexOf = arrLastIndex.lastIndexOf(30);
// console.log(arrLastIndexOf);
// //includes()
// let arrInclude = ["HeLlo","World","Ahmed","Anas"];
// console.log(arrInclude.toString().toLowerCase().split(",").includes("hellO".toLowerCase()));
// //forEach()
// arrInclude.forEach((e,i,a) => {
//     console.log(e);
// });
// arrIndex.forEach((e) => {
//     console.log(e**2);
// })
// //map()
// let arrMap = arrIndex.map((e,i,a) => {
//     return e**2;
// });
// console.log(arrMap);
// //filter()
// let arrFilter = arrIndex.filter((e,i,a) => {
//     return e>=40;
// });
// console.log(arrFilter);
// let arrFilter2 = arrInclude.filter((e,i,a) => {
//     return i>=2;
// })
// console.log(arrFilter2);
// //reduce()
// let arrNum = [1,2,3,4,5,6,7,8,9,10];
// let arrNumReduceAdd = arrNum.reduce((prev,curr) => {
//     return prev+curr;
// },0);
// console.log(arrNumReduceAdd);
// let arrNumReducemult = arrNum.reduce((prev,curr) =>{
//     return prev*curr;
// }, 1 )
// console.log(arrNumReducemult);
// let arrNumReduceDivi= arrNum.reduce((prev,curr) =>{
//     return curr/prev;
// },1);
// // Subtraction
// // +++
// // +--
// // -+-
// //--+
// //value is less than zero is negative
// //value is greater than zero is positive
// let arrNumReduceSubt = arrNum.reduce((prev,curr) => {
//     if(prev<0){    
//         return prev+curr;
//     }else{
//         return -prev+curr;
//     }
// },0);
// console.log(arrNumReduceSubt);
// //sort()
// let arrSrt = ["Mango","Peach","Orange","Banana","Apple"];
// arrSrt.sort();
// console.log(arrSrt);
// let arrSrt2 = [1,11,2,3,4,5,6,7,8,9,20,15,30,25];
// arrSrt2.sort((a,b) => a-b);
// console.log(arrSrt2);
//reduce
// let numArr:number[]  = [1,2,3,4,5,6,7,8,9,10,40,60];
// let numArrReduce:number = numArr.reduce((prev,curr) => {
//     return prev+curr;
// },0);
// console.log(numArrReduce);
// function defulParam(a:string="Sam",opt?:string):void{
//     console.log(a);
// };
// defulParam();
var restPram = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var numred = a.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    console.log(numred);
};
restPram(2, 3, 4, 5);
