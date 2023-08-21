// Primitive DataTypes String,Number,Boolean,undefine,Null
let names = "Suresh"; // string
console.log(names);

let number = 15;
console.log(number); // number

let bool = 15;
console.log(bool === 15); // boolean

let unde;
console.log(unde); // undefine

let nulls = null;
console.log(nulls); // Null

// Non Primitive Datatypes Object,Function,Array

// Object
const obj = {
    name: "Biosa Maa",
    city: "Jalore",
    village: "Leta",
    PinCode: 343001,
    dis: {
        bio: "Hay Maa Mujhe Sakti de :)",
    }
}
console.log(obj);

//function -> 
function myFuc(a,b)
{
   return a+b;
}

let result = myFuc(20,20);
console.log(result);

//2 
let num1 = 5; 
const myFuc2 = (num2) =>{
   return num1/num2;
}
const results = myFuc2(5);
console.log(results);


//Array
const arr = ["suresh", "Rahul", "Jino"];
console.log(arr);