"use strict";



// **************** Wifi encuestas *********************** //
var ctx20 = document.getElementById("myChart20").getContext('2d');
var wifi_nombres_p = document.getElementById("nombres_hoteles_wifi_p").value;
var wifi_encuestas_p = document.getElementById("cantidad_encuestas_wifi_p").value;
// Quitarle la ultima coma
let cut_w_n_p = wifi_nombres_p.slice(0, -1);
let cut_w_e_p = wifi_encuestas_p.slice(0, -1);
// Transformar en array con comas
let array_wifi_nombres_p = cut_w_n_p.split(',');
let array_wifi_encuestas_p = cut_w_e_p.split(',');

var myChart2 = new Chart(ctx20, {
  type: 'bar',
  data: {
    labels: array_wifi_nombres_p,
    datasets: [{
      label: 'Porcentaje',
      data: array_wifi_encuestas_p,
      borderWidth: 2,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false // Hide data labels
    }
    }],
    
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
   
  }
});

// **************** Wifi encuestas *********************** //
var ctx10 = document.getElementById("myChart1").getContext('2d');
var wifi_nombres = document.getElementById("nombres_hoteles_wifi").value;
var wifi_encuestas = document.getElementById("cantidad_encuestas_wifi").value;
// Quitarle la ultima coma
let cut_w_n = wifi_nombres.slice(0, -1);
let cut_w_e = wifi_encuestas.slice(0, -1);
// Transformar en array con comas
let array_wifi_nombres = cut_w_n.split(',');
let array_wifi_encuestas = cut_w_e.split(',');

var myChart2 = new Chart(ctx10, {
  type: 'bar',
  data: {
    labels: array_wifi_nombres,
    datasets: [{
      label: 'Encuestas',
      data: array_wifi_encuestas,
      borderWidth: 2,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

// **************** Reportes pendientes por hotel y reportes terminados por hotel *********************** //
var h = document.getElementById("cantidad_hoteles").value;
var h2 = document.getElementById("cantidad_hoteles2").value;
var p = document.getElementById("cantidad_pendientes").value;
var t = document.getElementById("cantidad_terminados").value;
let hoteles_array = h.split(',');
let hoteles_array2 = h2.split(',');
let pendientes_array = p.split(',');
let terminados_array = t.split(',');

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: hoteles_array,
    datasets: [{
      label: 'Reportes',
      data: pendientes_array,
      borderWidth: 1,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
     
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      x: {
        display: false
      }
    },
    
  }
});


var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:  hoteles_array2,
    datasets: [{
      label: 'Reportes',
      data: terminados_array,
      borderWidth: 2,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
      
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

// cantidad de requisiciones por proyecto por mes
var ctx2 = document.getElementById("myChart5").getContext('2d');
var nombres_desarrollo = document.getElementById("nombres_desarrollo").value;
var nombres_desarrollo2 = document.getElementById("nombres_desarrollo2").value;
var cantidad_req = document.getElementById("cantidad_req").value; 
let cutCantidades = cantidad_req.slice(0, -1); // Quitarle la ultima coma
let cut_nombresDesarrollo = nombres_desarrollo.slice(0, -1); // Quitarle la ultima coma
let cut_nombresDesarrollo2 = nombres_desarrollo2.slice(0, -1); // Quitarle la ultima coma
let cantidades_tikets = cutCantidades.split(','); // Quitarle la ultima coma
let array_nombres_desarrollo = cut_nombresDesarrollo.split(','); // Quitarle la ultima coma
let array_nombres_desarrollo2 = cut_nombresDesarrollo2.split(','); // Quitarle la ultima coma

var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: array_nombres_desarrollo2,
    datasets: [{
      label: 'Requisiciones',
      data: cantidades_tikets,
      borderWidth: 2,
      backgroundColor: ['#256FD6','#b66dff','#256FD6','#1F868F'],
      borderColor: ['#256FD6','#b66dff','#256FD6','#1F868F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

// cantidad de requisiciones pendientes
var ctx3 = document.getElementById("myChart6").getContext('2d');
var r_pendientes = document.getElementById("pendientes_req").value;
let cut_rpendientes = r_pendientes.slice(0, -1); // Quitarle la ultima coma
let array_r_pendientes = cut_rpendientes.split(','); // Quitarle la ultima coma

var myChart2 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: array_nombres_desarrollo,
    datasets: [{
      label: 'Requisiciones',
      data: array_r_pendientes,
      borderWidth: 2,
      backgroundColor: ['#256FD6','#b66dff','#256FD6','#1F868F'],
      borderColor: ['#256FD6','#b66dff','#256FD6','#1F868F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

// Mantenimiento reportes pendientes
var ctx4 = document.getElementById("myChart7").getContext('2d');
var c_m_p = document.getElementById("mantenimiento_cantidades_p").value;
var h_m_nombres = document.getElementById("mantenimiento_hoteles_nombres").value;
var h_m_nombres2 = document.getElementById("mantenimiento_hoteles_nombres2").value;
let cut_c_m_p = c_m_p.slice(0, -1); // Quitarle la ultima coma
let cut_c_h_nombres = h_m_nombres.slice(0, -1); // Quitarle la ultima coma
let cut_c_h_nombres2 = h_m_nombres2.slice(0, -1); // Quitarle la ultima coma
let array_m_p = cut_c_m_p.split(','); // Transformar en array con comas
let array_h_nombres = cut_c_h_nombres.split(','); // Transformar en array con comas
let array_h_nombres2 = cut_c_h_nombres2.split(','); // Transformar en array con comas

var myChart2 = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: array_h_nombres,
    datasets: [{
      label: 'Reportes',
      data: array_m_p,
      borderWidth: 2,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

// Mantenimiento reportes terminados
var ctx5 = document.getElementById("myChart8").getContext('2d');
var c_m_t = document.getElementById("mantenimiento_cantidades_t").value;
let cut_c_m_t = c_m_t.slice(0, -1); // Quitarle la ultima coma
let array_m_t = cut_c_m_t.split(','); // Transformar en array con comas
var myChart2 = new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: array_h_nombres2,
    datasets: [{
      label: 'Reportes',
      data: array_m_t,
      borderWidth: 2,
      backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});



$("#products-carousel").owlCarousel({
  items: 3,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});



