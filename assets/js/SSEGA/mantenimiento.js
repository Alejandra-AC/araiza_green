setInterval(function() {
    $('#mantenimiento_activos').load(window.location.href + ' #mantenimiento_activos');
  }, 30000); // Temporizador que ejecuta el refresco cada 30 segundos
  
  function VerTiket(id)
  {
      document.getElementById('id').value = id;
      document.getElementById("formTiket").submit();
  }