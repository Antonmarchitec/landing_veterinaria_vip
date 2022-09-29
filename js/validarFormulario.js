const validar = () =>{
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let celular = document.querySelector("#celular").value;
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(nombre === "" || correo === "" || celular === ""){
        //alert("Rellenar todos los campos!");
        
        Swal.fire({
         title:"<h2 class='title'> ¡RELLENAR TODOS LOS ESPACIOS! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"warning",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false;
                
    }else if(nombre.length > 30){
        //alert("no puedes ingresar mas de 20 palabras en el campo nombre");
        
        Swal.fire({
         title:"<h2 class='title'> ¡COLOQUE 30 CARACTERES COMO MAX! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"warning",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false; 
        
    }else if (isNaN(celular)){
        //alert("El dato que ingresaste no es un numero, o verifica que no haya espacios de por medio");
        Swal.fire({
         title:"<h2 class='title'> ¡EL NUMERO ES INVALIDO! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"warning",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false;
        
        
    }else if(celular.length < 8 || celular.length > 15 ){
        //alert("solo se permiten 8 digitos minimo y 15 maximo, o verifica que no haya espacios de por medio");
        Swal.fire({
         title:"<h2 class='title'> ¡SOLO SE PERMITE UN NUMERO ENTRE 8 Y 15 DIGITOS! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"warning",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false;
        
        
        
    }else if(!expresionRegular.test(correo)){
        //alert("el correo no es valido");
        Swal.fire({
         title:"<h2 class='title'> ¡LA DIRECCIÓN DE CORREO NO ES VALIDA! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"warning",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false;
        
       
    }else{
      Swal.fire({
         title:"<h2 class='title'> ¡mensaje enviado! <h2>",    //tilte si se acepta codigo html
         //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
         icon:"success",  //error   wargning  info  success
         confirmButtonText:"Aceptar",
         backdrop:true,    //el fondo se matiza oscuro con true y false 
         footer: '<h3 class = "title_h3">¡La información es importante!</h3>',  //se puede utilizar html
         //width:"35%",    //ancho de ventana trabajar en %
         //timer: 5000,
         //timerProgressBar: true,
         padding: "10px",   //paddinn ventana
         background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
         //color:'white',
         //grow:"column",   //funciona como width o height con valores column, row , fullscreen
         position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
         
         //PERSONALIZAR EL BOTON DE CONFIRMAR 
            showConfirmButton:true,   //false desaparece el boton
            confirmButtonColor:"#054256",
            confirmButtonAriaLabel:"Confirmar",
         
         //PERSONALIZAR EL BOTON DE CANCELAR 
            showCancelButton: false,  //false desaparece el boton
            cancelButtonText: "cancelar",
            cancelButtonColor:"#0000",
            cancelButtonAriaLabel:"dfdfa",

         //IMAGENES EN LA ALERTA
             //imageUrl:'./img/ada.png',
             //imageWidth:'100px',
             //imageHeight:'100px',
             //imageAlt:'ada',

         //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
             buttonsStyling: false,     //true para trabajar con stilos de switchAlert
             showCloseButton: true,     //coloca el la x para cerrar
             closeButtonAriaLabel:"Cerrar alerta",

         //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
             customClass:{
                 popup: "class_popup",
                 //image:'class_image',
                 confirmButton:"class_buttonConfirm",
                 footer:'class_footer'

                 //container:'container',
                 //html:'class_title',
                 //header:'header',
                 //closeButton:'close_buttom',
                 //content:'class_content',
                 //input:'inputClass',
                 //actions:'actions',
                 //icon:"class_icon",
                 //cancelButton:"class_buttonCancel",
             },
        });
        return false;
    }
}




