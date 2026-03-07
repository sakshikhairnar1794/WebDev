//function hoisting  (whole function moves upward in scope)
sayMyName("Sakshi");

function sayMyName(finalName){
    console.log(finalName);
}

//variable hoisting
 // Only variable declaration moves upward in  the scope

 console.log(age);
 var age = 25;

// using let & const keyword

// console.log(s);
// let s = 10;

// console.log(a);
// const a =20;

//class hoisting not possible
// const obj = new Human();
// class Human{

// }