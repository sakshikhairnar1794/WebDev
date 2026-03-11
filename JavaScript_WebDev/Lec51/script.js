// addition
let mydiv = document.querySelector('#mydiv');
let newelement = document.createElement('span')

newelement.textContent = "My name is sakshi khirnar";
mydiv.insertAdjacentElement('beforebegin', newelement);



let neelement = document.createElement('span')

neelement.textContent = "My name is sakshi khairnar";

mydiv.insertAdjacentElement('afterbegin', neelement);


let newt = document.createElement('span')

newt.textContent = "My name is sakshi khairnar";
mydiv.insertAdjacentElement('beforeend', newt);


let nelement = document.createElement('span')

nelement.textContent = "My name is sakshi khairnar";

mydiv.insertAdjacentElement('afterend', nelement);

let newe = document.createElement('span')

let br = document.createElement('br');
mydiv.insertAdjacentElement('beforeend', br);

newe.textContent = " My surname is khairnar";
mydiv.insertAdjacentElement('beforeend', newe);

// remmoval
let parent = document.querySelector('#mydiv')
let child =  document.querySelector('#spara');
parent.removeChild(child);