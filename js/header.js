const contMenu = document.getElementById('contMenu');

window.addEventListener('scroll',function(){
    const positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    const positionElement = contHeader.offsetTop;

    if(positionScroll > positionElement + 600 ){     //de 600 hasta inf
        contMenu.classList.add('contMenu_JS');
    }else if(positionScroll < positionElement + 400){
        contMenu.classList.remove('contMenu_JS');
    }
})