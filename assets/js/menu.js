// Obtener todos los elementos li del menú principal y submenús
let menuItems = document.querySelectorAll('ul li');

function linkActive() {
    // Recorrer elementos li
    menuItems.forEach(item => {
        // Obtener el enlace dentro del elemento li
        let link = item.querySelector('a');
        if (link.href == window.location.href) {
            // Marcar el elemento li como activo si coincide con la URL de la ventana
            item.classList.add('active');
            
            // Marcar todos los elementos li padre (submenús) como activos
            let parentLi = item;
            while (parentLi = parentLi.parentElement.closest('li')) {
                parentLi.classList.add('active');
            }
        } else {
            // Desmarcar el elemento li si no coincide con la URL de la ventana
            item.classList.remove('active');
        }
    });
}

// Marcar elementos li activos al cargar la página
document.addEventListener('DOMContentLoaded', linkActive);

// Marcar elementos li activos cuando haya cambio de hash
window.addEventListener('hashchange', linkActive);