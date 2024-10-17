function reloadChat() {
  $("#chat-content").load(location.href+" #chat-content>*","");
}

function pulsar(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    validarMsj();
  }
}

function validarMsj() {	

  var archivo = document.getElementById('archivo');
  var mensaje = document.getElementById('mensaje');

  if(archivo.value=="" && mensaje.value=="") {
    alert("Mensaje vacio");
  } else {
    document.getElementById("frm_chat").submit(); 
  }
  
}

function cambiarEstatus(tiket, action) {

  document.getElementById('tiket').value  = tiket;
  document.getElementById('action').value = action;
  document.getElementById("frm_estatus").submit();

}

function regresarTiket(id) {

  document.getElementById('id').value = id;
  document.getElementById("frm_regresar").submit();

}