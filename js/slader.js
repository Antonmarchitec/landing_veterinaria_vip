const contSlader = document.querySelector("#pushEslader");
let sliderSection = document.querySelectorAll(".cajas");
//console.log(sliderSection);
let sliderSelectionLast = sliderSection[sliderSection.length - 1];
//console.log(sliderSelectionLast);
const btnLeft = document.querySelector("#pushIzquierda");
const btnRight = document.querySelector("#pushDerecha");

//ESTA LINEA COLOCA LA ULTIMA IMG DE EN PRIMERA POSICION
contSlader.insertAdjacentElement("afterbegin", sliderSelectionLast);

function Next(){
    let sladerPosicionActual = document.querySelectorAll(".cajas")[0];
    contSlader.style.marginLeft = "-200%";
    contSlader.style.transition = "all 0.5s";
    setTimeout(function(){    //UTILIZA DOS EVENTOS AL MISMO TIEMPO
        contSlader.style.transition = "none";
        contSlader.insertAdjacentElement("beforeend" ,sladerPosicionActual);
        contSlader.style.marginLeft = "-100%";
    },500)
}


function Prev(){
    let sliderSection = document.querySelectorAll(".cajas");
    let sliderSelectionLast = sliderSection[sliderSection.length - 1];
    contSlader.style.marginLeft = "0";
    contSlader.style.transition = "all 0.5s";
    setTimeout(function(){
        contSlader.style.transition = "none";
        contSlader.insertAdjacentElement("afterbegin" ,sliderSelectionLast);
        contSlader.style.marginLeft = "-100%";
    },500)
}

btnRight.addEventListener("click" ,function(){
    Next();
})
btnLeft.addEventListener("click" ,function(){
    Prev();
})



setInterval(function(){
    Next();
},8000);



