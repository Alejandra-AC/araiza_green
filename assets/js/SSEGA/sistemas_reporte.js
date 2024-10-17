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

// ÁREA DE ARRASTRE DE ARCHIVOS
const dropArea = document.querySelector('.drop-section')
// ÁREA DE LISTADO DE ARCHIVOS SELECCIONADOS
const listSection = document.querySelector('.list-section')
// LISTA DE ARCHIVOS SELECCIONADOS
const listContainer = document.querySelector('.list')
// LISTA DE ELEMENTO UL
const lista = document.querySelector('.lista')
// BOTÓN PARA EXAMINAR ARCHIVOS
const fileSelector = document.querySelector('.file-selector')
// INPUT FILE
const fileSelectorInput = document.querySelector('.file-selector-input')

var uploadId = 1

var cont = 0

const temp = document.getElementById('temp').value;

// SUBIR ARCHIVOS CON EL BOTÓN DE EXAMINAR
fileSelector.onclick = () => fileSelectorInput.click()
fileSelectorInput.onchange = () => {
    [...fileSelectorInput.files].forEach((file) => {

        if(cont<3) {
            if(typeValidation(file.type)){
                // LLAMA FUNCIÓN
                uploadFile(file)
            }    
        } else {
            alert("Máximo 3 archivos")
            return true
        }
    })
}

// CUANDO EL ARCHIVO ESTA SOBRE EL ÁREA DE ARRASTRE
dropArea.ondragover = (e) => {
    e.preventDefault();
    [...e.dataTransfer.items].forEach((item) => {

        if(cont<3) {
            // VALIDA TIPO DE ARCHIVO
            if(typeValidation(item.type)){
                dropArea.classList.add('drag-over-effect')
            }
        } else {
            alert("Máximo 3 archivos")
            return true
        }

    })
}
// CUANDO EL ARCHIVO SALE DEL ÁREA DE ARRASTRE
dropArea.ondragleave = () => {
    dropArea.classList.remove('drag-over-effect')
}

// CUANDO EL ARCHIVO SE SUELTA EN EL ÁREA DE ARRASTRE
dropArea.ondrop = (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over-effect')
    if(e.dataTransfer.items){
        [...e.dataTransfer.items].forEach((item) => {
            if(item.kind === 'file'){
                const file = item.getAsFile();

                if(cont<3) {
                    // VALIDA TIPO DE ARCHIVO
                    if(typeValidation(file.type)){
                        uploadFile(file)
                    }
                } else {
                    alert("Máximo 3 archivos")
                    return true
                }
            }
        })
    }else{
        [...e.dataTransfer.files].forEach((file) => {

            if(cont<3) {
                // VALIDA TIPO DE ARCHIVO
                if(typeValidation(file.type)){
                    uploadFile(file)
                }
            } else {
                alert("Máximo 3 archivos")
                return true
            }
        })
    }
}

// COMPROBAR EL TIPO DE ARCHIVO
function typeValidation(type){
    var splitType  = type.split('/')[0]
    var splitTypeP = type.split('.')[0]

	// ARCHIVOS PDF, IMAGEN Y VIDEO
    if(type == 'application/pdf' || splitType == 'image' || splitType == 'video' || splitTypeP == 'application/vnd' || type == 'text/plain'){
        return true
    }
}

// FUNCIÓN DE CARGA DE ARCHIVOS
function uploadFile(file){

	// SE DESPLIEGA SECCIÓN DE LISTADO DE ARCHIVOS
    listSection.style.display = 'block'
	// SE CREA ELEMENTO DE LISTA
    var li = document.createElement('li')
	// AGREGA CLASE DE PROGRESO A ELEMENTO DE LISTA
    li.classList.add('in-prog')
    li.setAttribute('id', uploadId)

	// CREAMOS ELEMENTO DE LISTA CON EL ARCHIVO
    li.innerHTML = `
        <div class="col">
            <img src="../../assets/img/iconos/${iconSelector(file.type, file.name.substring(file.name.lastIndexOf('.'),file.name.length))}" alt="">
        </div>
        <div class="col">
            <div class="file-name">
                <div class="name">${file.name}</div>
                <span>0%</span>
            </div>
            <div class="file-progress">
                <span></span>
            </div>
            <div class="file-size">${(file.size/(1024*1024)).toFixed(2)} MB</div>
        </div>
        <div class="col">
            <button type="button" class="btn-remove" onclick="remove('${uploadId}','${file.name}')">
                <svg xmlns="http://www.w3.org/2000/svg" class="cross" height="20" width="20"><path d="m5.979 14.917-.854-.896 4-4.021-4-4.062.854-.896 4.042 4.062 4-4.062.854.896-4 4.062 4 4.021-.854.896-4-4.063Z"/></svg>
            </button>
        </div>
    `

	// AGREGAMOS ELEMENTO DE ARCHIVO A LISTA DE ARCHIVOS
    lista.prepend(li)
	uploadId++;
    cont++;
    var http = new XMLHttpRequest()
    var data = new FormData()
    data.append('temp', temp)
    data.append('action', '1')
    data.append('file', file)
    http.onload = () => {
        li.classList.add('complete')
        li.classList.remove('in-prog')
    }

	// MUESTRA EL PROGRESO DE SUBIDA DE ARCHIVO
    http.upload.onprogress = (e) => {
        var percent_complete = (e.loaded / e.total)*100
        li.querySelectorAll('span')[0].innerHTML = Math.round(percent_complete) + '%'
        li.querySelectorAll('span')[1].style.width = percent_complete + '%'
    }
    http.open('POST', '../controlador/temporales.php', true)
    http.send(data)

    document.getElementById('cont').value = cont

}

// BUSCAR ICONO PARA ARCHIVO
function iconSelector(type, extension){
    
    var splitType = (type.split('/')[0] == 'application') ? type.split('/')[1] : type.split('/')[0];

    if (splitType=="pdf" || splitType=="image" || splitType=="video" || splitType=="text") {
       return splitType + '.png' 
    } else if (extension==".xls" || extension==".xlsx") {
        return 'xls.png' 
    } else if (extension==".ppt" || extension==".pptx") {
        return 'ppt.png' 
    } else if (extension==".doc" || extension==".docx") {
        return 'ppt.png' 
    }    

}

// BUSCAR ICONO PARA ARCHIVO 
function remove(id,nameFile){

    var httprem = new XMLHttpRequest()
    var rem = new FormData()
    rem.append('temp', temp)
    rem.append('action', '2')
    rem.append('doc', nameFile)
    httprem.open('POST', '../controlador/temporales.php', true)
    httprem.send(rem)

    $('#'+id).remove();
    cont--;

    if(cont==0) {
        listSection.style.display = 'none'
    }

    document.getElementById('cont').value = cont

}

function mostrarCsf() {
  var categoriaSeleccionada = document.getElementById("categoria").value;
  var clasificacionDiv      = document.getElementById("divClasificacion");
  var clasificacionSelect   = document.getElementById("clasificacion");

  if (categoriaSeleccionada !== "0") {
      clasificacionDiv.style.display = "block";
      cargarClasificaciones(categoriaSeleccionada);
  } else {
      clasificacionDiv.style.display = "none";
      clasificacionSelect.removeAttribute("required"); // Quitar el atributo required si el campo está oculto
      clasificacionSelect.innerHTML = ""; // Limpiar el contenido del select
  }
}

function mostrarPdt() {
  var clasificacionSeleccionada = document.getElementById("clasificacion").value;
  var productoDiv      = document.getElementById("divProducto");
  var productoSelect   = document.getElementById("producto");

  if (clasificacionSeleccionada !== "0") {
      productoDiv.style.display = "block";
      cargarProductos(clasificacionSeleccionada);
  } else {
      productoDiv.style.display = "none";
      productoSelect.removeAttribute("required"); // Quitar el atributo required si el campo está oculto
      productoSelect.innerHTML = ""; // Limpiar el contenido del select
  }
}

function cargarClasificaciones(categoriaSeleccionada) {
  var clasificacionSelect = document.getElementById("clasificacion");
  clasificacionSelect.innerHTML = "";

  // Agregar la opción "Seleccione problema"
  var optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.disabled = true;
  optionDefault.selected = true;
  optionDefault.textContent = "Seleccione Clasificación";
  clasificacionSelect.appendChild(optionDefault);

  // Agregar el atributo required al select
  clasificacionSelect.setAttribute("required", "required");

  // Realizar una solicitud AJAX para obtener las subcategorías desde la base de datos
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../controlador/consultas_sistemas.php?llave=1&id_categoria=" + categoriaSeleccionada, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var clasificaciones = JSON.parse(xhr.responseText);
          var clasificacionDiv = document.getElementById("divClasificacion"); // Obtener el contenedor del input y el icono

          if (clasificaciones.length > 0) { // Verificar si hay datos
              clasificacionDiv.style.display = "block"; // Mostrar el contenedor
              clasificacionSelect.style.display = "block"; // Mostrar el select

              clasificaciones.forEach(function(clasificacion) {
                  var option = document.createElement("option");
                  option.value = clasificacion.valor; // Asignar el valor del JSON al atributo value de la opción
                  option.text = clasificacion.nombre;
                  clasificacionSelect.appendChild(option);
              });

          } else {
              
              clasificacionDiv.style.display = "none"; // Ocultar el contenedor si no hay datos

              document.getElementById("clasificacion").value = "0";
              document.getElementById("divProducto").style.display = "none";
              var clas = document.getElementById("clasificacion");
              clas.removeAttribute("required");

          }

          document.getElementById("producto").value = "0";
          document.getElementById("divProducto").style.display = "none";
          var pro = document.getElementById("prodcuto");
          pro.removeAttribute("required");
      }
  };
  xhr.send();
}

function cargarProductos(clasificacionSeleccionada) {
  var productoSelect = document.getElementById("producto");
  productoSelect.innerHTML = "";

  // Agregar la opción "Seleccione problema"
  var optionDefault2 = document.createElement("option");
  optionDefault2.value = "";
  optionDefault2.disabled = true;
  optionDefault2.selected = true;
  optionDefault2.textContent = "Seleccione Producto";
  productoSelect.appendChild(optionDefault2);

  // Agregar el atributo required al select
  productoSelect.setAttribute("required", "required");

  // Realizar una solicitud AJAX para obtener las subcategorías desde la base de datos
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../controlador/consultas_sistemas.php?llave=2&id_clasificacion=" + clasificacionSeleccionada, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var productos = JSON.parse(xhr.responseText);
          var productoDiv = document.getElementById("divProducto"); // Obtener el contenedor del input y el icono

          if (productos.length > 0) { // Verificar si hay datos
              productoDiv.style.display = "block"; // Mostrar el contenedor
              productoSelect.style.display = "block"; // Mostrar el select

              productos.forEach(function(producto) {
                  var option2 = document.createElement("option");
                  option2.value = producto.valor; // Asignar el valor del JSON al atributo value de la opción
                  option2.text = producto.nombre;
                  productoSelect.appendChild(option2);
              });
          } else {
              productoDiv.style.display = "none"; // Ocultar el contenedor si no hay datos

              document.getElementById("producto").value = "0";
              document.getElementById("divProducto").style.display = "none";
              var pro = document.getElementById("producto");
              pro.removeAttribute("required");

          }
      }
  };
  xhr.send();
}


