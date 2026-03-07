//Variable scoping

// Global scope
// function scope
// block scope

var age = 15 //global scope
//accessible in complete file

console.log(age);

if(true){

}    console.log(age)

function sayHello(){
    console.log("Hi", age);
}
sayHello();


// let ag = 18;


// console.log(ag);

// if(true){
//     console.log(ag)
// }

// function sayHello(){
//     console.log("Hi", ag);
// }
// sayHello();


// function scope variable can be accessed only inside the function not outside it


// block scope

// var isnt block scope

// const and let are block scope


//temporal dead zone

// no hoisting if we create variable using let or const 

//so the lines or code in which the variiable is not accessed is called as temporaln dead zone