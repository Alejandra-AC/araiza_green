<?php 
include "./controlador/conexion.php";


if (isset($_GET['lang'])) {
  $idioma = $_GET['lang'];

} else {
  header("HTTP/1.1 302 Moved Temporarily");
  header("Location: index.php");
}

$sql_condiciones = "SELECT * FROM `pregunta` WHERE idioma='" . $idioma . "' ";
$result_condiciones = $green->query($sql_condiciones);
$row_condiciones = $result_condiciones->fetch_assoc();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <title>Araiza Green</title>
    <meta name="google" content="notranslate">
    <link rel="shortcut icon" type="image/x-icon" href="./assets/img/logos/logo.svg">
    <link rel="stylesheet" href="./assets/modules/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/modules/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/components.css">
    <style>
        body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: url('fondo.svg') no-repeat center center fixed;
            background-size: cover;
        }

        .switch-boton :hover {
            cursor: pointer;
        }
    </style>
</head>

<body class="layout-3">
    <div id="app">
        <div class="main-wrapper container">


            <div class="main-content">
                <section class="section">
                    <div class="section-body">
                        <div class="card">
                            <div class="card-body text-center p-5">
                                <img style="margin-bottom:20px;" src="./assets/img/iconos/araiza_green.png" alt="Ariaza Green" width="200px">
                                <h5 class="text-success"><?php echo $row_condiciones['titulo_a'];?></h5>
                                <p><?php echo $row_condiciones['texto_a'];?></p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </div>
    </div>

    <script src="./assets/modules/jquery.min.js"></script>
    <script src="./assets/modules/popper.js"></script>
    <script src="./assets/modules/tooltip.js"></script>
    <script src="./assets/modules/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
    <script src="./assets/modules/moment.min.js"></script>
    <script src="./assets/js/stisla.js"></script>

    <script src="./assets/js/scripts.js"></script>
    <script src="./assets/js/custom.js"></script>

</body>

</html>