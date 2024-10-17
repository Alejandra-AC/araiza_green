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

const temp = document.getElementById('temp').value

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

$(document).ready(function () {

    /*$('body').on('click', '#lista li', function(){
        
    })*/

});
