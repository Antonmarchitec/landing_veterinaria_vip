
let botonSubida = document.getElementById("btnTop");
window.addEventListener('scroll',function(){
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    let positionElemento = botonSubida.offsetTop;   //top = 527px
    //console.log(positionElemento);
    if (positionScroll > positionElemento + 200){
        botonSubida.classList.add("subir");
    }else if(positionScroll < positionElemento){
        botonSubida.classList.remove("subir");
    }
})




