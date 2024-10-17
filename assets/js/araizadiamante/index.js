function VisualizarTarjeta(id, nivel) {

    if ($("#visualizar").length != 0) {
      document.getElementById("visualizar").remove();
    }

    $.ajax({
      type: "POST",
      url: "../controlador/tarjetas.php",
      data: {
        socio: id
      },
      success: function(data) {

        if (data != "NO") {

          var htmlTags = "<div id='visualizar'class='modal-dialog' role='document'>" +
            "<div class='modal-content' style='background-color: #ffffff'>" +
            "<div class='modal-header' style='background-color: #293641;'>" +
            "<h5 class='modal-title' id='modalNvo'>Tarjeta Socio <span style='color: #BF8E50; font-weight: 600'>" + nivel + "</span> No. <span style='color: #BF8E50; font-weight: 600'>" + id + "</span> </h5>" +
            "<button type='button' class='close' onclick='CerrarVisualizar();' aria-label='Close'>" +
            "<span aria-hidden='true'>&times;</span>" +
            "</button>" +
            "</div>" +

            "<div class='modal-body' style='text-align: center; align-items: center'>" +
            "<img src='../tarjetas/Araiza_Diamante" + id + ".png' height='400px'>" +
            "</div>" +

            "<div class='modal-footer' style='justify-content: center'>" +
            "<button type='button' class='btn btn-primary' onclick='CerrarVisualizar();'>OK</button>" +
            "</div>" +
            "</div>" +
            "</div>";

          $('#Tarjeta').append(htmlTags);

          $('#Tarjeta').modal('show');
        }

      }
    });

  }

  function CerrarVisualizar() {

    $('#Tarjeta').modal('hide');

    document.getElementById("visualizar").remove();
  }

  function DescargarImagen(id) {

    document.getElementById('btnDescargar' + id).style.display = "none";
    document.getElementById('btnSpinD' + id).style.display = "inline-block";

    $.ajax({
      type: "POST",
      url: "../controlador/tarjetas.php",
      data: {
        socio: id
      },
      success: function(data) {

        var a = document.createElement('a');

        a.download = "Araiza_Diamante" + id + ".png";
        a.target = '_self';
        a.href = data;

        a.click();

        document.getElementById('btnDescargar' + id).style.display = "inline-block";
        document.getElementById('btnSpinD' + id).style.display = "none";

      }
    });

  }

  function SeleccionarIdioma(origen, id) {

    // INPUT SOCIO 
    if (origen == "1") {

      document.getElementById('socio').value = document.getElementById('inputSocio').value;
      document.getElementById('origen').value = "1";

      // SELECCIÓN DE TABLA
    } else {

      document.getElementById('socio').value = id;
      document.getElementById('origen').value = "2";

    }

    $(Seleccionar).modal('show');
  }

  function EnviarCorreo(idioma) {

    $(Seleccionar).modal('hide');
    var socio = document.getElementById('socio').value;
    var origen = document.getElementById('origen').value;
    document.getElementById('idioma').value = idioma;

    if (origen == "1") {

      document.getElementById('btnEnviar').style.display = "none";
      document.getElementById('btnSpinE').style.display = "inline-block";

    } else {

      document.getElementById('btnEnviar' + socio).style.display = "none";
      document.getElementById('btnSpinE' + socio).style.display = "inline-block";

    }

    $.ajax({
      type: "POST",
      url: "../controlador/tarjetas.php",
      data: {
        socio: socio
      },
      success: function(tarjeta) {

        if (tarjeta == "NO") {
          alert("Socio no encontrado!");

          if (origen == "1") {
            document.getElementById('btnEnviar').style.display = "inline-block";
            document.getElementById('btnSpinE').style.display = "none";
            document.getElementById('inputSocio').value = "";
          } else {
            document.getElementById('btnEnviar' + socio).style.display = "inline-block";
            document.getElementById('btnSpinE' + socio).style.display = "none";
          }

        } else {

          $.ajax({
            type: "POST",
            url: "../controlador/correo_bienvenida.php",
            data: {
              socio: socio,
              idioma: idioma
            },
            success: function(correo) {

              if (correo == "NO") {
                alert("Socio no encontrado!");
              }

              if (origen == "1") {
                document.getElementById('btnEnviar').style.display = "inline-block";
                document.getElementById('btnSpinE').style.display = "none";
                document.getElementById('inputSocio').value = "";
              } else {
                document.getElementById('btnEnviar' + socio).style.display = "inline-block";
                document.getElementById('btnSpinE' + socio).style.display = "none";
              }
            }
          });
        }

      }
    });

  }

  function CargarTCA(origen, id) {

    if (origen == "1") {
      if (document.getElementById('num1').value == "" || document.getElementById('num2').value == "") {
        alert("Debe capturar Número de Socio Inicial y Socio Final !");
        return;
      }
    }

    // INPUT RANGO DE SOCIO 
    if (origen == "1") {

      document.getElementById('btnCargar').style.display = "none";
      document.getElementById('btnSpinC').style.display = "inline-block";

      var socioI = document.getElementById('num1').value;
      var socioF = document.getElementById('num2').value;

      // SELECCIÓN DE TABLA
    } else {

      document.getElementById('btnCargar' + id).style.display = "none";
      document.getElementById('btnSpinC' + id).style.display = "inline-block";

      var socioI = id;
      var socioF = "";

    }

    $.ajax({
      type: "POST",
      url: "../controlador/cargaTCA.php",
      data: {
        socioI: socioI,
        socioF: socioF
      },
      success: function(carga) {

        if (origen == "1") {
          document.getElementById('btnCargar').style.display = "inline-block";
          document.getElementById('btnSpinC').style.display = "none";
          document.getElementById('num1').value = "";
          document.getElementById('num1').value = "";

        } else {
          document.getElementById('btnCargar' + id).style.display = "inline-block";
          document.getElementById('btnSpinC' + id).style.display = "none";
        }

      }
    });

  }

