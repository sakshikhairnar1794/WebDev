

function changetext(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Sakshi"
    }
    
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changetext);
//fpara.removeEventListener('click', changetext)

let anchorEle = document.getElementById('fanchor');

anchorEle.addEventListener('click', function(event){
    event.preventDefault();
    anchorEle.textContent = "Click done";
});

// let paras = document.querySelectorAll('p');

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];

//     para.addEventListener('click', function () {
//         alert("You have clicked para: " + i);
//     });
// }

    // let paras = document.querySelectorAll('p');
     function alertPara(event){
        if(event.target.nodeName ==='SPAN'){
            alert("You have clicked on " + event.target.textContent);
        }
     
     }
    // }
    // for(let i=0; i<paras.length; i++){ 
    //     let para = paras[i];
    //     para.addEventListener('click', alertPara);
    //   }

    let mydiv = document.getElementById('wrapper');
    document.addEventListener('click' , alertPara)