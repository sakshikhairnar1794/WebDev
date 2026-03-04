//function definition
function sayMyName(){
    console.log("Sakshi")
}
// function use - function call

sayMyName();


function printCounting(){
    for(let i=0; i<=100; i++){
        console.log(i);
    }
}
printCounting();

// Parameterized function

function printNumber(num){
    console.log("Printing Number", num);
}
printNumber(5);

// Return Functions

function getSum(a,b,c){
    let sum = a+b+c;
    return sum;
// Unreachable statements - written after return are unreachable
    // let a = 10;
    // let b = 15;
    // let c = 20;
    // let sum1 = a+b;
    // console.log(sum1)
}
console.log(getSum(3,4,5));


// Function Expression
const squareNumner = function(num){
    let ans = num**2;
    return ans;
}
let ans = squareNumner(5);
console.log(ans);

// Arrow function

function getExp(x,y){
    let ans = x**y;
    return ans;
}
console.log(getExp(2,10));

let getExp1 = (x,y) => {
  let ans = x**y;
    return ans;
}
console.log(getExp1(2,10));