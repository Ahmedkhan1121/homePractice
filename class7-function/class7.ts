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
let arrowFunc = ():void => console.log("Hello Arrow");


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
const defaultParam = (name:string,rollNo:number,skill:string):void => {
    if(skill === undefined){
        skill = "AI";
    }
    console.log(skill);
};
defaultParam("Ahmed",420,"AI with Blockchain");
//After Default Prameter in JS
const defaultParam2 = (name:string,rollNo:number,skill:string = "AI"):void => {
    console.log(skill);
};
defaultParam("Ahmed",420,"AI with Blockchain");

// Optional Parameter
const optionlParam = (name:string,address?:string):void =>{
    console.log(name);
};
optionlParam("Ahmed");

//Rest Parameter
// kabhi kabhi ek parameter ta hama multiple argument return horah to wo rest parameter hota ha and wo array return kr
// Rest Parameter = ...val
const restParam = (...a:number[]):void => {
    let add=a.reduce((prev,curr) =>{
        return prev+curr
    },0);
    console.log(add);
}
restParam(1,2,4,3,14,5,11,6,7,8,9)

const restparam2 =(...a:number[]):void =>{
    let sort  =a.sort()
    }

    
    function factor(num:number):number{
        if(num===1){
            return 1
        }else{
            return num * factor(--num)
        }
    }
    console.log(factor(5));
