

function changetext(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Sakshi"
    }
    
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changetext);
//fpara.removeEventListener('click', changetext)