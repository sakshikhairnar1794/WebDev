// let firstPromise = new Promise((resolve, reject)=>{
//     console.log("Sakshi");
//     reject(new Error("Internal server Error"));
// });

let firstPromise = new Promise((resolve, reject) => {

    setTimeout(function saymyname(){
        console.log("My name is Sakshi");
        resolve();
    }, 10000);
    return 1;

});
// chaining promises 
let promise1 = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Promise fulfilled");
    }
    else{
        reject("Promise rejected");
    }
});

promise1
.then((message) => {
    console.log("First message: " + message);
    return message;
})
.then((message)=>{
    console.log("Second message: " + message);
    return "Promise fulfilled third message";
})
.then((message)=>{
    console.log("Third msg: " + message);
})
.catch((error) => {
    console.log(error);
});

// Handling multiple promises
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "First");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, "Second");
})
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 4000, "Third");
})

Promise.all([promise2, promise3, promise4]).then((values) => {
    console.log(values);
})
.catch((error)=>{
    console.log("error:" + error);
})