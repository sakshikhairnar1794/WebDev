let name = "Manish" // accessible in whole file
function outerFunction(){
    {
        let name = "Sushant"  // accessible in only the curley brackets
    }
    let name = "Khairnar"; //let -> blocked scope
    function innerFunction(){
       let name = "sakshi";  //accessed here only
        console.log(name);
    }
    innerFunction();
}
outerFunction()