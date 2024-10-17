
"use strict";

$("#usuarios").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [5] }
  ],
  "order": [
    [0, 'desc']
  ]        
});

$("#empresas").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [1] }
  ]
});

$("#departamentos_plataa_tabla").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [1] }
  ]
});

$("#nuevo_sistema").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [1] }
  ]
});

$("#vista_submodulo").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [2] }
  ]
});

$("#sistemas-app").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [0,4] }
  ]
});


$(document).ready(function() {
    // Initialize DataTable
    var table = $('#actividades-app').DataTable({
        "order": [[0, "desc"]]
    });

    // Custom search inputs
    $('#sistema-select').on('change', function() {
      var selectedValue = this.value;
      if (selectedValue) {
          table.columns(1).search('^' + selectedValue + '$', true, false).draw();
      } else {
          table.columns(1).search('').draw();
      }
    });

    $('#usuario-select').on('change', function() {
      var selectedValue = this.value;
      if (selectedValue) {
          table.columns(3).search('^' + selectedValue + '$', true, false).draw();
      } else {
          table.columns(3).search('').draw();
      }
    });

    $('#fecha-select').on('change', function() {
      var selectedValue = this.value;
      if (selectedValue) {
          table.columns(5).search('^' + selectedValue + '$', true, false).draw();
      } else {
          table.columns(5).search('').draw();
      }
    });
});



$("#iconosapp").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [3] }
  ]
});

//*********************** ARAIZA DIAMANTE *********************** // 

$("#socios-diamante").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [9] }
  ]
});

$("#nsocios-diamante").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [9] }
  ]
});

$("#referencias").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [9] }
  ]
});

//*********************** SSCA *********************** // 

$("#solicitudes_pendientes").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [6] }
  ]
});

//*********************** SSEGA SISTEMAS *********************** // 

// SISTEMAS ACTIVOS
$ (document).ready(function() { 

  $('#sistemas_activosAdm').dataTable({ 
    "ajax": {
        "url": "../../SSEGA/controlador/data_sistemas.php",
        "dataSrc": ""
    },
    "columns": [
        { "data" : "num" }, 
        { "data" : "folio" }, 
        { "data" : "urgencia" },            
        { "data" : "hotel" },         
        { "data" : "usuario" },
        { "data" : "titulo" },
        { "data" : "categoria" },          
        { "data" : "asignado" },         
        { "data" : "entrada" },
        { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 7,
        "className": "text-center"
      },
      {
        "targets": 8,
        "className": "text-center"
      }
    ],  
    "order": [
      [1, 'desc']
    ]        
  }); 

  setInterval(function () {
    $('#sistemas_activosAdm').DataTable().ajax.reload();
  }, 30000);  

  $('#sistemas_activosAdm').DataTable().on('click', 'tbody tr', function () {

    let data = $('#sistemas_activosAdm').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

  $('#sistemas_activosStd').dataTable({ 
    "ordering": false,
    "ajax": {
        "url": "../../SSEGA/controlador/data_sistemas.php",
        "dataSrc": ""
    },
    "columns": [
      { "data" : "num" }, 
      { "data" : "folio" }, 
      { "data" : "urgencia" },   
      { "data" : "titulo" },
      { "data" : "categoria" },
      { "data" : "asignado" },         
      { "data" : "entrada" },
      { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 5,
        "className": "text-center"
      },
      {
        "targets": 6,
        "className": "text-center"
      }
    ],             
  }); 

  setInterval(function () {
    $('#sistemas_activosStd').DataTable().ajax.reload();
  }, 30000);  

  $('#sistemas_activosStd').DataTable().on('click', 'tbody tr', function () {

    let data = $('#sistemas_activosStd').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

});

// MANTENIMIENTO ACTIVOS // USUARIOS ADMIN
$ (document).ready(function() { 

  $('#mantenimiento_activosAdm').dataTable({ 
    "ajax": {
        "url": "../../SSEGA/controlador/data_mantenimiento.php",
        "dataSrc": ""
    },
    "columns": [
        { "data" : "Id" }, 
        { "data" : "urgencia" }, 
        { "data" : "hotel" }, 
        { "data" : "reporto" },              
        { "data" : "clasificacion" },
        { "data" : "producto" },
        { "data" : "responsable" },
        { "data" : "fecha_alta" },            
        { "data" : "tiempo" }        
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center"
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 5, 
        "className": "text-center"
      }
    ],  
    "order": [
      [0, 'desc']
    ]        
  }); 

  setInterval(function () {
    $('#mantenimiento_activosAdm').DataTable().ajax.reload();
  }, 30000);  

  $('#mantenimiento_activosAdm').DataTable().on('click', 'tbody tr', function () {

    let data = $('#mantenimiento_activosAdm').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/reportem.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["Id"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

});

// MANTENIMIENTO ACTIVOS // USUARIO ESTANDAR
$ (document).ready(function() { 

  $('#mantenimiento_activosStd').dataTable({ 
    "ajax": {
        "url": "../../SSEGA/controlador/data_mantenimiento.php",
        "dataSrc": ""
    },
    "columns": [
        { "data" : "Id" }, 
        { "data" : "urgencia" }, 
        { "data" : "reporto" }, 
        { "data" : "clasificacion" },                  
        { "data" : "producto" },
        { "data" : "responsable" },
        { "data" : "fecha_alta" },            
        { "data" : "tiempo" }        
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center"
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      }
    ],  
    "order": [
      [0, 'desc']
    ]        
  }); 

  setInterval(function () {
    $('#mantenimiento_activosStd').DataTable().ajax.reload();
  }, 30000);  

  $('#mantenimiento_activosStd').DataTable().on('click', 'tbody tr', function () {

    let data = $('#mantenimiento_activosStd').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/reportem.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["Id"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

});



$("#proyectos_ssega_tabla").dataTable({
  /*"columnDefs": [
    { "sortable": false, "targets": [9] }
  ]*/
});

$("#sistemas_proceso").dataTable({
  "columnDefs": [
    { "orderable": true, "targets": [0] }
  ],
  "order": [[0, 'desc']]
});

$("#sistemas_cerrado").dataTable({ 
  
});

$("#sistemas_guardias").dataTable({
  /*"columnDefs": [
    { "sortable": false, "targets": [9] }
  ]*/
});

//*********************** SSEGA DESARROLLO  *********************** // 

$("#tabla_reporte_requisiciones").dataTable({
  "columnDefs": [
    {  }
  ]
});

$("#desarrollo_activos").dataTable({
  "columnDefs": [
   { "sortable": false, "targets": [] }
 ], order: [[0, 'desc']]
});


$("#desarrollo_activos_principal").dataTable({
  "columnDefs": [
   { "sortable": false, "targets": [] }
 ], order: [[0, 'desc']]
});

$("#desarrollo_proyectos").dataTable({
  "columnDefs": [
      { "sortable": false, "targets": [1,2] } 
  ],
  "order": [[0, 'asc']] 
});


$("#desarrollo_lista").dataTable({
 "columnDefs": [
   { "sortable": false, "targets": [] }
 ], order: [[0, 'desc']]
});

//*********************** SSEGA MANTENIMIENTO  *********************** // 

$("#mantenimiento_activos").dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [1] }
  ]
});

$("#mantenimiento_proceso").dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [0] }
  ]
});


$("#tabla_reporte_cerrados").dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [0] }
  ]
});


$("#dashboard_tabla").dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [0] }
  ]
});

//*********************** INVENTARIOS RH *********************** // 

$('#inventario_entradas').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [6, 7] },
  ],
  order: [[3, 'desc']]
});

$('#inventario_disponible').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": 6 }
  ]
});

$('#inventario_salidas').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": 3 }
  ]
});
$('#eventos_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": 3 }
  ]

});

$('#prestamos_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [5, 6] }
  ]
});

$('#prestamos_ver_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [4] }
  ]
});

$('#devolucion_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [5] }
  ]
});

$('#devolucion_ver_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [4] }
  ]
});

$('#canasta_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [5] }
  ]
});

$('#articulos_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#bajaD_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#entradas_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#asignaciones_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#prestamos_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#prestamosA_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#limpieza_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#reparacion_r_tabla').dataTable({
  "columnDefs": [
  ]
});

$('#lavanderia_tabla').dataTable({
  "columnDefs": [
  ]
});
$('#entradas_ver').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [5] }
]
});
$('#departamentos_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [1] }
]
});

$('#categorias_tabla').dataTable({
  "columnDefs": [
    { "orderable": false, "targets": [2] }
]
});

$('#polizas_tabla').dataTable({
  
});

//*********************** SSEGA GASOLINERAS *********************** // 

$ (document).ready(function() { 

  $('#gasolineras').dataTable({ 
    "ajax": {
        "url": "../../SSEGA/controlador/data_gasolineras.php",
        "dataSrc": ""
    },
    "columns": [
        { "data" : "num" }, 
        { "data" : "folio" }, 
        { "data" : "urgencia" },            
        { "data" : "hotel" },         
        { "data" : "usuario" },
        { "data" : "producto" },
        { "data" : "asunto" },            
        { "data" : "asignado" },         
        { "data" : "entrada" },
        { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 7,
        "className": "text-center"
      },
      {
        "targets": 8,
        "className": "text-center"
      }
    ],  
    "order": [
      [0, 'asc']
    ]        
  }); 

  setInterval(function () {
    $('#gasolineras').DataTable().ajax.reload();
  }, 30000);  

  $('#gasolineras').DataTable().on('click', 'tbody tr', function () {

    let data = $('#gasolineras').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/gas_reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

  $('#gasolineras_tablas').dataTable({ 
    "ordering": false,
    "ajax": {
        "url": "../../SSEGA/controlador/data_gasolineras.php",
        "dataSrc": ""
    },
    "columns": [
      { "data" : "num" }, 
      { "data" : "folio" }, 
      { "data" : "urgencia" },   
      { "data" : "producto" },
      { "data" : "asunto" },            
      { "data" : "asignado" },         
      { "data" : "entrada" },
      { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 6,
        "className": "text-center"
      },
      {
        "targets": 7,
        "className": "text-center"
      }
    ],             
  }); 

  setInterval(function () {
    $('#gasolineras_tablas').DataTable().ajax.reload();
  }, 30000);  

  $('#gasolineras_tablas').DataTable().on('click', 'tbody tr', function () {

    let data = $('#gasolineras_tablas').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/gas_reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

});


$ (document).ready(function() { 

  $('#gasolineras_validacion').dataTable({ 
    "ajax": {
        "url": "../../SSEGA/controlador/data_gasolineras_val.php",
        "dataSrc": ""
    },
    "columns": [
        { "data" : "num" }, 
        { "data" : "folio" }, 
        { "data" : "urgencia" },            
        { "data" : "hotel" },         
        { "data" : "usuario" },
        { "data" : "producto" },
        { "data" : "asunto" },            
        { "data" : "asignado" },         
        { "data" : "entrada" },
        { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 7,
        "className": "text-center"
      },
      {
        "targets": 8,
        "className": "text-center"
      }
    ],  
    "order": [
      [0, 'asc']
    ]        
  }); 

  setInterval(function () {
    $('#gasolineras_validacion').DataTable().ajax.reload();
  }, 30000);  

  $('#gasolineras_validacion').DataTable().on('click', 'tbody tr', function () {

    let data = $('#gasolineras_validacion').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/gas_reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

  $('#gasolineras_tablas_val').dataTable({ 
    "ordering": false,
    "ajax": {
        "url": "../../SSEGA/controlador/data_gasolineras_val.php",
        "dataSrc": ""
    },
    "columns": [
      { "data" : "num" }, 
      { "data" : "folio" }, 
      { "data" : "urgencia" },   
      { "data" : "producto" },
      { "data" : "asunto" },            
      { "data" : "asignado" },         
      { "data" : "entrada" },
      { "data" : "tiempo" }
    ],
    "columnDefs": [
      {
        "targets": 0, 
        "className": "text-center",
        "visible" : false
      },
      {
        "targets": 1, 
        "className": "text-center"
      },
      {
        "targets": 2, 
        "className": "text-center"
      },
      {
        "targets": 6,
        "className": "text-center"
      },
      {
        "targets": 7,
        "className": "text-center"
      }
    ],             
  }); 

  setInterval(function () {
    $('#gasolineras_tablas').DataTable().ajax.reload();
  }, 30000);  

  $('#gasolineras_tablas').DataTable().on('click', 'tbody tr', function () {

    let data = $('#gasolineras_tablas').DataTable().row(this).data();

    var form = $('<form action="../../SSEGA/araiza/gas_reporte.php" method="post">' +
    '<input type="hidden" name="id" value="' + data["folio"] + '"></input>' + '</form>');
    $('body').append(form);
    $(form).submit();

  }); 

});

$('#gasolineras_reportes').dataTable({
  "columnDefs": [
  ]
});

$('#inventarios').dataTable({
  "columnDefs": [
  ]
});

$('#inv_proveedores').dataTable({
  "columnDefs": [
  ]
});

$('#inv_cat').dataTable({
  "columnDefs": [
  ]
});

$('#inventarios_bajas').dataTable({
  "columnDefs": [
  ]
});

// Publicidad
$('#eventos_publicidad').dataTable({
  "columnDefs": [
  ]
});


// ARAIZA GREEN
$("#araiza_green_estancias").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [5] }
  ]
});

$("#araiza_green_reporte").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [7] }
  ]
});