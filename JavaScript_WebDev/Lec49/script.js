//same reference points to both this is not cloning
let obj = {
    age: 21,
    wt: 60,
    ht:168
};

console.log(obj);
let copy = obj;

obj.color = "White";
console.log(copy);
console.log(obj);


// Cloning
//different references on both objects

//using spread operator

let src = {
    age: 21,
    wt: 60,
    ht:168
};
let dest = {...src};

src.age = 90;

console.log("Src: ", src);
console.log("dest: ", dest);


// using assign operator

let srco = {
    age: 21,
    wt: 60,
    ht:168
};
let desto = Object.assign({}, srco);
srco.age = 90;

console.log("Srco: ", srco);
console.log("desto: ", desto);


//Using  iteration

let srcobj = {
    age: 21,
    wt: 60,
    ht:168
};
let destobj = {};
for(let key in srcobj){
    let newKey = key;
    let newval = srcobj[key];

    //inserting neykey and value in destination and create a clone

    destobj[newKey] = newval;
}
srcobj.age = 90;
console.log("Srcobj: ", srcobj);
console.log("destobj: ", destobj);
