<?php
include "./controlador/conexion.php";

$sql = "SELECT * FROM `pregunta` WHERE idioma=1";
$result = $green->query($sql);
$row = $result->fetch_assoc();

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

              <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

              <div class="card-body text-center">
                <div class="mb-3 mt-3">
                  <img src="./assets/img/iconos/araiza_green.png" alt="Ariaza Green" width="200px">
                </div>

                <h4 id="titulo" class="text-success"><?php echo $row['titulo']; ?></h4>
                <p id="parrafo_1"><?php echo $row['parrafo_1']; ?></p>

                <p id="parrafo_2"><?php echo $row['parrafo_2']; ?></p>

                <img src="./assets/img/iconos/hoja.png" alt="Ariaza Green" width="50px">

                <form action="./controlador/registrar.php" method="POST">
                  <input type="hidden" name="source" value="2" />
                  <input type="hidden" name="lang" id="lang" value="1" />

                  <div class="form-group mt-5">
                    <h5><span id="hotel">Hotel</span><span class="text-danger">*</span></h5>
                    <select class="form-control" name="hotel" required>
                      <?php
                      $sql_hoteles = "SELECT  *  FROM hotel WHERE id<6 ORDER BY id ASC";
                      $hoteles = $plataa->query($sql_hoteles);
                      while ($row_hotel = $hoteles->fetch_assoc()) { ?>
                        <option value="<?php echo $row_hotel['id'];?>" <?php if($row_hotel['id']==2) { echo " selected";} ?>disabled><?php echo $row_hotel['nombre'];?></option>
                      <?php } ?>
                    </select>
                  </div>

                  <div class="form-group">
                    <h5 id="num_socio"><?php echo $row['num_socio']; ?></h5>

                    <div class="row">
                      <div class="col-10 col-md-11">
                        <input type="number" id="busquedaSocio" name="numero_socio" class="form-control" />
                      </div>
                      <div class="col-2 col-md-1">
                        <button onclick="" id="busquedaBoton" type="button" class="btn btn-success btn-md mt-1"><i class="fas fa-search"></i></button>
                      </div>

                    </div>
                    <div id="result" style="color:red;"></div>
                    <script>
                      document.getElementById('busquedaBoton').addEventListener('click', function() {
                        var inputValue = document.getElementById('busquedaSocio').value;
                        if (inputValue) {
                          var xhr = new XMLHttpRequest();
                          xhr.open('POST', './controlador/buscar_socio.php', true);
                          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                          xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                              var response = JSON.parse(xhr.responseText);

                              if (response.error) {
                                document.getElementById('result').innerHTML = response.error;
                              } else if (Object.keys(response).length > 0) {
                                document.getElementById('result').innerHTML = '';
                                document.getElementById('nombreInput').value = response.nombre;
                                document.getElementById('correoInput').value = response.email;
                                document.getElementById('nombreInput').readOnly = true;
                                document.getElementById('correoInput').readOnly = true;
                              } else {
                                document.getElementById('result').innerHTML = 'Socio NO Encontrado';
                                document.getElementById('nombreInput').value = '';
                                document.getElementById('correoInput').value = '';
                                document.getElementById('nombreInput').readOnly = false;
                                document.getElementById('correoInput').readOnly = false;
                              }
                            }
                          };
                          xhr.send('socio=' + encodeURIComponent(inputValue));
                        } else {
                          alert('Por favor, ingrese un valor.');
                        }
                      });
                    </script>

                  </div>

                  <div class="form-group">
                    <h5><span id="correo"><?php echo $row['correo']; ?></span><span class="text-danger">*</span></h5>
                    <input type="email" id="correoInput" class="form-control" name="correo" required>
                  </div>

                  <div class="form-group">
                    <h5><span id="nombre"><?php echo $row['nombre']; ?></span><span class="text-danger">*</span></h5>
                    <input type="text" id="nombreInput" class="form-control" name="nombre" required>
                  </div>

                  <div class="form-group">
                    <h5><span id="num_hab"><?php echo $row['num_hab']; ?></span> <span class="text-danger">*</span></h5>
                    <input type="number" class="form-control" name="num_hab" required>
                  </div>

                  <div class="form-group">
                    <h5><span id="acumula"><?php echo $row['acumula']; ?></span> <span class="text-danger">*</span></h5>
                    <div class="col-sm-12 col-md-12 text-center">
                      <input style="cursor:pointer;" type="radio" id="si" name="acumula" value="1" required>
                        <label id="opcion" for="si"><?php echo $row['opcion']; ?></label>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                        <input style="cursor:pointer;" type="radio" id="no" name="acumula" value="0" required>
                        <label for="no">No</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <h5 id="numero_referencia">Número de Referencia</h5>

                    <div class="row">
                      <div class="col-10 col-md-11">
                        <input type="number" id="busquedaReferencia" name="numero_referencia" class="form-control" />
                      </div>
                      <div class="col-2 col-md-1">
                        <button onclick="" id="busquedaRBoton" type="button" class="btn btn-success btn-md mt-1"><i class="fas fa-search"></i></button>
                      </div>

                    </div>
                    <div id="resultR" style="color:red;"></div>
                    <script>
                      document.getElementById('busquedaRBoton').addEventListener('click', function() {
                        var inputRValue = document.getElementById('busquedaReferencia').value;
                        if (inputRValue) {
                          var xhr = new XMLHttpRequest();
                          xhr.open('POST', './controlador/buscar_socio.php', true);
                          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                          xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                              var response = JSON.parse(xhr.responseText);
                              if (response.error) {
                                document.getElementById('resultR').innerHTML = response.error;
                              } else if (Object.keys(response).length > 0) {
                                document.getElementById('resultR').innerHTML = '';
                                document.getElementById('referenciaInput').value = response.nombre;
                              } else {
                                document.getElementById('resultR').innerHTML = 'Referencia NO Encontrada';
                                document.getElementById('busquedaReferencia').value = '';
                                document.getElementById('referenciaInput').value = '';
                              }
                            }
                          };
                          xhr.send('socio=' + encodeURIComponent(inputRValue));
                        } else {
                          alert('Por favor, ingrese un valor.');
                        }
                      });
                    </script>

                  </div>

                  <div class="form-group">
                    <h5><span id="referencia">Nombre de Referencia</span></h5>
                    <input type="text" id="referenciaInput" class="form-control" name="referencia" readonly="false">
                  </div>

                  <div class="col-sm-12 col-md-12 text-center mt-5 mb-3">
                    <button id="siguiente" class="btn btn-lg btn-success" type="submit"><?php echo $row['boton']; ?></button>
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