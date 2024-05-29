
// For Loop
// iska hum tab used krte ha jab hame pta ho ke hame kitne number tak iteration krwani ho
// Array ,String ke element ko line by line print krwana iteration hota ha
//Step 1 : variable initialize
// step 2 : check the condition
// Step 3 : run the code
// Step 4 : increment / decrement  value of variable
// for(let i=1; i<=10; i++){
//     console.log(i);
// };
// let arrLop = ["Apple","Banana","Orange","Peach","Guava","Pineapple"];
// for(let i=0; i<arrLop.length; i++){
//     console.log(arrLop[i]);
// }
//break;
// for(let i=1; i<=10; i++){
//     if(i==3){
//         break;
//     };
//     console.log(i);
// }
//continue
// for(let i=1; i<=10; i++){
//     if(i===4 || i===7 || i===9){
//         continue;
//     };
//     console.log(i);
// };
let arrLop2 = ["Apple","Banana","Orange","Peach","Guava","Pineapple"];
// fixed number iteration
for(let i=0; i<arrLop2.length; i++){
    if(i === 3){
        continue;
    }
    console.log(arrLop2[i]);
}
//While Loop
// iska used hum tab krte jab hae ek condition ke behalf pr code ko bar bar run krwana ho or hame pta na ho ke kitne time krwana ho
// while(arrLop2.length>2){
//     arrLop2.pop();
// };
// console.log(arrLop2);

// let i = 11;
// while(i<=10){
//     console.log(i);
//     i++;
// };

//Do While Loop
//Step 1 : variable initialize
// Step 2 : run the code
// step 3 : check the condition
// Step 4 : increment / decrement  value of variable
let j= 11;
do{
    console.log(j);
    j++;
}while(j<=10);

// For Of Loop
// kisi String ya Array ke element ko line by line print krwane ke liye For of loop ka used hota ha
let arrLop3 = ["Apple","Banana","Orange","Peach","Guava","Pineapple"];
for(let x of arrLop3){
    if(x === arrLop3[3]){
        break;
    }
    console.log(x);
};

for(let x of arrLop3){
    if(x == arrLop3[3]){
        continue;
    }
    console.log(x);
}
let strOf:any = "Hello World";
for(let y of strOf){
    console.log(y);
};

// For in Loop
// kisi String ya Array ke index ko line b line print krwana hoto for in loop ka used hota ha
for(let x in arrLop3){
    console.log(x);
}
for(let y in strOf){
    console.log(y);
}