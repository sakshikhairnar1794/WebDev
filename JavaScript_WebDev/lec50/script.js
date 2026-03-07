// compile time error

//console.log(1;) //syntax error

// runtime error
//reference error
// console.log(x);


// error handling


try{
    console.log("I am inside try block, start");
    let x = 10;
   // console.log(x);

    console.log("I am inside try block, end");

}
catch(e){

    console.log("I am inside catch block, start");
    console.log("Your error is here: ", e);
    console.log("I am inside catch block, end");

// we define what we want to do if error occurs

//retry logic, fallback mechanism, logging, custom error , etc
}

finally{
    console.log("Runs everytime despite of any error or not");
}


// creating a custom error

try{
    console.log(y);
}
catch(err){
    throw new Error("Bhai pehle declare karo fir print kerna");
}
try{
    let errorcode = 100;

    if(errorcode == 100){
        throw new Error("Invalid JSON");
    }

}
catch(err){
    console.log("Error handled:", err.message);
}
finally{
    console.log("This block always runs");
}
