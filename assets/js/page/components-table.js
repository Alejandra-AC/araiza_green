"use strict";

$("#sortable-table tbody").sortable({
  handle: '.sort-handler',
  update: function (event, ui) {
      var order = $(this).sortable('toArray');
      $.ajax({
          url: '../controlador/orden_menu.php', 
          method: 'POST',
          data: { order: JSON.stringify(order) },
          success: function (response) {
              console.log(response);
          },
          error: function (error) {
              console.error('Error al actualizar el orden: ', error);
          }
      });
  }
});


