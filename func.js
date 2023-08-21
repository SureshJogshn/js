// in Js functon is block of code
// 3 types of functions 

// Regular fuction
// function add()
// {
//     let a = 20, b = 5;
//     console.log(a+b);
// }
// add();

//Ragular function with Parameter's and with return

function add(a,b){
    return a + b;
 }
const sum = add(50,50);
console.warn(sum);

// Arrow fuction
// const sub = () =>{
//   let a = 20, b = 5;
//   console.log(a-b);
// }
// sub();

// // function expresion
// const multi = function()
// {
//     let a = 20, b = 5;
//     console.log(a*b);
// }

// multi();

// const bio = (a,b,c) =>{
//      return a,b,c;
// }

// const result = bio('A' + "is" + 99 + "Year Old" + 2);
// console.log(result);


///////////////////////////////////////////////////////////////////////
//string concatation
// let fName = "suresh";
// let lName = "kumar";

// console.log(fName.concat(lName));

// let a = "My Name is surya jogsan";
// let sl = a.slice(0,23);
// console.log(sl)

let a = "My Name is surya jogsan";
let sl = a.replace("Kavya");
console.log(sl)