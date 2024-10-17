/*setInterval(function() {
  $('#tblSistemas').load(window.location.href + ' #tblSistemas');
}, 30000); // Temporizador que ejecuta el refresco cada 30 segundos*/

function VerTiket(id)
{
    document.getElementById('id').value = id;
    document.getElementById("formTiket").submit();
}