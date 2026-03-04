let obj = {
    name: "Sakshi",
    "full name" : "Sakshi Pramod Khairnar",
    age: 21,
    weight: 60,
    height: "5ft 6in",
    greet: function(){
        console.log("hello ji kaise ho saare");
    }
};
console.log(obj)
obj.greet();

console.log(typeof(obj));


//Array creation
let arr = [1,2,3,4,5, 'Sakshi','Khairnar'];
arr.shift();
arr.unshift(10);

console.log(arr);
//Array constructor

let brr = new Array('love', 1, true);
brr.push('Sakshi')
brr.pop('love')
console.log(brr);
brr.push(20);
brr.push(30);
brr.push(40);
console.log(brr);

console.log(brr.slice(2,4));
console.log(typeof(arr))
console.log(typeof(brr))
brr.splice(1,2,'kunal');
console.log(brr);

let crr = [10,20,30];
let ansarr = crr.map((number) => {
    return number*number;
})
console.log(ansarr)

crr.map((number, index) => {
    console.log(number);
    console.log(index);
})

let drr = [10,20, 30, 21, 11, 44, 51];

let evenarray = drr.filter((number) =>{
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(evenarray);

let filteredValue = arr.filter((value) =>{
    if(typeof(value) === "string"){
        return true;
    }
    else{
        return false;
    }
})
console.log(filteredValue);  

let err = [10, 20, 30, 90, 50];

let ans = err.reduce((acc, curr)=> {
    return acc+curr;
}, 0)

console.log(ans);

console.log(err.sort()) ;

console.log(err);
console.log(err.indexOf(90));

//for each
let length = err.length;
console.log(length);
err.forEach((value, index) =>{
    console.log("Number: ", value, "Index: ", index);
})

//traditional for loop

for(let i=0; i<length; i++){
    console.log(err[i])
}

// for -in loop to iterate on innumerable 

for(let key in obj){
    console.log(key, " ", obj[key]);
}

//for -of loop

let fullName = "SAkshi";
for(let val of fullName){
    console.log(val);
}


//Arrays with function
let grr = [10,20,30,40,50];
function getSum(grr){
    let len = grr.length;
    let sum = 0;
    for(let i = 0; i<len; i++){
        sum = sum + grr[i];
    }
    return sum;
}
let totalSum = getSum(grr);
console.log(totalSum);


// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value) =>{
//         sum = sum + value;
//     })
//     return sum;
// }
// console.log(getSum(arr));

// can be written as

let getsum = (arr)=>{
    let sum = 0;
    arr.forEach((value) =>{
        sum = sum + value;
    })
    return sum;
}
console.log(getsum(arr));