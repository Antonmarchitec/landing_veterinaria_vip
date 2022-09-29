<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Datos de formulario enviados</title>
</head>
<body>
    <div class="container">
        <div class="contCuadro">
            <div class="imagen">
                <!--imagen-->
            </div>
            <div class="contParrafo">
                <h2 class="parrafo">¡Tu mensaje a sido enviado<br> con éxito!</h2>
            </div>
            <a href="index.html" class="link"> Volver</a> <i class="iconFlecha fas fa-arrow-right"></i> 
        </div>           
    </div>
</body>
</html>



<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['celular'];
$comentario = $_POST['comentario'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Telefono de contacto: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $_POST['comentario'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'nidyapsalazar@gmail.com';
$asunto = 'Tienes una nueva consulta!';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:enviado.html");   
?>