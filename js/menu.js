const estado = false;
const contEnlaces = document.getElementById("menuenlaces");
const btnResponsive = document.getElementById("btnresponsive");

btnResponsive.addEventListener("click", function(){
    contEnlaces.classList.toggle("aux");
    contEnlaces.style.transition = "0.2s all";
})