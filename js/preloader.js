/*window.onload = function(){
    let contenedor = document.getElementById('contCarga');
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
}*/

let preloader = document.querySelector("#loader");

window.addEventListener("load" , function(){
    preloader.classList.add("loaderJS");
});