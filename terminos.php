<?php
include "./controlador/conexion.php";

if (isset($_POST['lang'])) {

  $idioma = $_POST['lang'];

  // informacion
  $num_socio      = $_POST['numero_socio'];
  $correo         = $_POST['correo'];
  $nombre         = $_POST['nombre'];
  $hab            = $_POST['num_hab'];
  $acumula        = $_POST['acumula'];
  $hotel          = $_POST['hotel'];

} else {

  header("HTTP/1.1 302 Moved Temporarily");
  header("Location: index.php");

}

$sql_condiciones = "SELECT * FROM `terminos` WHERE idioma='" . $idioma . "' ";
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
  </style>
</head>

<body class="layout-3">
  <div id="app">
    <div class="main-wrapper container">
      <div class="main-content">
        <section class="section">

          <div class="section-body">
            <div class="card">
              <div class="card-body text-center">


                <img src="./assets/img/iconos/araiza_green.png" alt="Ariaza Green" width="200px">

                <p>
                <h4 class="text-success"><?php echo $row_condiciones['titulo']; ?></h4>
                </p>

                <div class="mb-5">
                  <ul class="list-group text-left">
                    <?php
                    $sql = "SELECT * FROM `condiciones` WHERE id_leng='" . $idioma . "' ORDER BY orden ASC";
                    $result = $green->query($sql);
                    if ($result->num_rows > 0) {
                      while ($row = $result->fetch_assoc()) {
                    ?>
                        <li class="list-group-item"><i class="fas fa-leaf text-success"></i> <?php echo $row['condicion'] ?></li>
                    <?php
                      }
                    }
                    ?>
                  </ul>
                </div>

                <img src="./assets/img/iconos/hoja.png" alt="Ariaza Green" width="50px">
                <h6 class="text-success"><?php echo $row_condiciones['parrafo']; ?></h6>
                <h6 class="mb-5"><?php echo $row_condiciones['parrafo2']; ?></h6>

                <form action="./controlador/registrar.php" method="POST">
                <input type="hidden" name="source" value="1"/>
                <input type="hidden" name="hotel" value="<?php echo $hotel?>"/>
                <input type="hidden" value="<?php echo $num_socio?>" name="numero_socio"/>
                <input type="hidden" value="<?php echo $correo?>" name="correo"/>
                <input type="hidden" value="<?php echo $nombre?>" name="nombre"/>
                <input type="hidden" value="<?php echo $hab?>" name="num_hab"/>
                <input type="hidden" value="<?php echo $idioma?>" name="lang"/>
                <div class="col-sm-12 col-md-12 text-center mb-3">
                  <button type="submit" class="btn btn-lg btn-success"><?php echo $row_condiciones['boton']; ?></button>
                </div>
                </form>
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