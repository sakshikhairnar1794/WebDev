class human{
    //properties
    age = 13;//public
    #wt = 30;
    height = 140;

    constructor(newht){
        this.height = newht;
    }


    // behaviour
    walking(){
        console.log(" i m Walking", this.#wt);
    }
    #running(){  //private
        console.log(" i m Running");
    }
    get fetchweight(){
    return this.#wt;

}
    set modifywt(val){
        return this.#wt = val;
    }


}
let obj = new human(250);
console.log(obj.age);
obj.walking();
// console.log(obj.#wt);//cannout be accessible outside class

//getters setters = used to access and modify private values outside class


//constructor
console.log(obj.height);


console.log(obj.fetchweight);

//default values


function saymyname(myname= "swayam"){
    console.log("Mu name is:", myname);
}
saymyname("Sakshi");

function myname(myname= "swayam"){
    console.log("Mu name is:", myname);
}
myname();

function Mame(myname= "swayam", lname = "Khairnar"){
    console.log("My name is:", myname, " ", lname);
}
Mame("sakshi");


function Saymyname(myname= "swayam", lname = myname.toLocaleUpperCase()){
    console.log("Mu name is:", myname, lname);
}
Saymyname("sakshi");


// default parameter can be object, array, function etc
