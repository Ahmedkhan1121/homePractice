//let
var name5 = "Hello World";
// update variable in let is possible and let does not redeclared
name5 = "Hel";
//const 
var name6 = 46;
// const does not update and redecraled
// name6 = 46;
var isCond = true;
//{} is a blocks
if (isCond) {
    //let is a block scope
    var age = 45;
    console.log(age);
    //const is a block
    var personName = "Ahmed";
}
;
for (var i = 1; i <= 10; i++) {
    var ages = 1;
    console.log(ages++);
}
//Using Var
// Var is a Function Scope
// if(isCond){
//     var age = 40;
// }
// console.log(age);
var inc = 1;
for (var i = 1; i <= 10; i++) {
    console.log(inc++);
}
