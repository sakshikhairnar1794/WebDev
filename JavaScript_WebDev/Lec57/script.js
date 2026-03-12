// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside timeout block")
//     }, 3000)
// }
// getData();

// await

// fetch API

// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // wait for response
    
//     // parse JSON (also async)
//     let data = await response.json();
    
//     console.log(data);
// }

// getData();


// scenario
//prepare url / api endpoint -> sync
// fetch data -> network call -> async
// //peocess data -> sync


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const options ={
  method: "POST",
  body: JSON.stringify({ username: "Sakshi khairnar" }),
  headers: myHeaders,
};

async function getData(){ const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
let data = await response.json();
console.log("get data response", data);
}
async function postData(){
const response = await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: ' Sakshi Khairnar I am in love with someone.',
    userId: 5,
    /* other post data */
  })
})

let data = await response.json();
console.log("My data", data);
}
async function processData(){
postData();
getData();
}
processData();