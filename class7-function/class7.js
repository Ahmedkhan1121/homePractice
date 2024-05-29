//Function
// function is used for reusable copy
//Function Decralation
// function call1To10():void{
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// };
// call1To10();
// call1To10();
//Global Scope => Whole File
// Local Scope => inside the Function
// let name5 = "Ahmed";  //Global Scope
// function scopes():void{
//     let name = "Sameer"; //Local Scope
//     console.log(name);
//     console.log(name5);
// };
// scopes()
// console.log(name);  because local variable doesn't exist ouside the function
//Hoisting
// Javascript ki file ke run hone sa phele uske function and variable ka on the top run hojana function Hoisting Hota ha 
//Function Hoisting
// hois();
// function hois():void{
//     console.log("Hello Hoisting");
// };
// //Variable Hoisting
// console.log(hoisVariab);
// var hoisVariab = "Hello";
//Anonymous Function
//jis function ka koi naam na ho wo anonymous function hota ha
//Function Expression
// let funcExpr = function():void{
//     console.log("Function Expression");
// };
// funcExpr();
// //Arrow Function
// let arrowFunc = ():void => {
//     console.log("Arrow Function");
// };
// arrowFunc();
// IN One line of code
var arrowFunc = function () { return console.log("Hello Arrow"); };
//Closures
//Parent Function ke call hone ke baad bhi uske programs ka child function access hona closures khelata ha
// function closureParen(a:number){
//     let name = "Tom";
//     return function(b:number){
//         return function(c:number){
//             return function(d:number){
//                 return a+b+c+d;
//             }
//         }
//     };
// }
// let parenFunc = closureParen(5);
// let childFunc = parenFunc(5);
// let childFunc2= childFunc(5);
// let childFunc3 =  childFunc2(5);
// console.log(childFunc3);
// let oneLineRtn= ():string=> 'hello world' ;
//Recursive Function  //
// let times = 5;
// let recursFunc = () => {
//     console.log("Hello World");
//     if(times<=5 && times>0){
//         times--;
//         recursFunc();
//     }
// };
// recursFunc();
//Default Parameter
//Before Default Prameter in JS
var defaultParam = function (name, rollNo, skill) {
    if (skill === undefined) {
        skill = "AI";
    }
    console.log(skill);
};
defaultParam("Ahmed", 420, "AI with Blockchain");
//After Default Prameter in JS
var defaultParam2 = function (name, rollNo, skill) {
    if (skill === void 0) { skill = "AI"; }
    console.log(skill);
};
defaultParam("Ahmed", 420, "AI with Blockchain");
// Optional Parameter
var optionlParam = function (name, address) {
    console.log(name);
};
optionlParam("Ahmed");
//Rest Parameter
// kabhi kabhi ek parameter ta hama multiple argument return horah to wo rest parameter hota ha and wo array return kr
// Rest Parameter = ...val
var restParam = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var add = a.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    console.log(add);
};
restParam(1, 2, 4, 3, 14, 5, 11, 6, 7, 8, 9);
var restparam2 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sort = a.sort();
};
function factor(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factor(--num);
    }
}
console.log(factor(5));
