"use strict";

// **************** Conectados Mexicali *********************** //
var mexicali = document.getElementById("ConectadosMexicali").getContext('2d');
var dias_m = document.getElementById("array_dias_m").value;
var cantidades_m = document.getElementById("array_cantidad_m").value;
// Quitarle la ultima coma
let cut_dias_m = dias_m.slice(0, -1);
let cut_cantidades_m = cantidades_m.slice(0, -1);
// Transformar en array con comas
let array_dias_m = cut_dias_m.split(',');
let array_cantidades_m = cut_cantidades_m.split(',');

var Mexicali = new Chart(mexicali, {
  type: 'bar',
  data: {
    labels: array_dias_m,
    datasets: [{
      label: 'Accesos',
      data: array_cantidades_m,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: true
    }
    }],
    
  },
  options: {
    onClick: function(event, chartElement) {
      console.log('Chart clicked');
      console.log('chartElement:', chartElement);

      if (chartElement.length > 0) {
        var element = chartElement[0];

        // Try both index and _index properties
        var index = element.index !== undefined ? element.index : element._index;
        var label = Mexicali.data.labels[index]; 

        console.log('Index:', index, 'Label:', label);

        $.ajax({
          url: '../../controlador/conectados.php',
          type: 'GET',
          data: { index: index, label: label }, 
          success: function(response) {
            var data = JSON.parse(response);
            $('#modalTitle').html(label);

            var table = '<table class="table"><thead><tr>'

            for(var key in data[0]){
              table += '<th>' + key + '</th>';
            }
            table += '</tr></thead><tbody>';

            data.forEach(function(row){
              table += '<tr>';
              for(var key in row){
                table += '<td>' + row[key] + '</td>';
              }
              table += '</tr>';
            });
            table += '</tbody></table>';


            $('#modalContent').html(table);
            $('#myModal').modal('show'); 
          },
          error: function(xhr) {
            console.error(xhr.responseText);
          }
        });
      } else {
        console.log('No chart elements found');
      }
    },

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

// **************** Conectados Calafia *********************** //
var calafia = document.getElementById("ConectadosCalafia").getContext('2d');
var dias_c = document.getElementById("array_dias_c").value;
var cantidades_c = document.getElementById("array_cantidad_c").value;
// Quitarle la ultima coma
let cut_dias_c = dias_c.slice(0, -1);
let cut_cantidades_c = cantidades_c.slice(0, -1);
// Transformar en array con comas
let array_dias_c = cut_dias_c.split(',');
let array_cantidades_c = cut_cantidades_c.split(',');

var Calafia = new Chart(calafia, {
  type: 'bar',
  data: {
    labels: array_dias_c,
    datasets: [{
        label: 'Accesos',
      data: array_cantidades_c,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false 
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

// **************** Conectados SanLuis *********************** //
var sanluis = document.getElementById("ConectadosSanluis").getContext('2d');
var dias_s = document.getElementById("array_dias_s").value;
var cantidades_s = document.getElementById("array_cantidad_s").value;
// Quitarle la ultima coma
let cut_dias_s = dias_s.slice(0, -1);
let cut_cantidades_s = cantidades_s.slice(0, -1);
// Transformar en array con comas
let array_dias_s = cut_dias_s.split(',');
let array_cantidades_s = cut_cantidades_s.split(',');

var SanLuis = new Chart(sanluis, {
  type: 'bar',
  data: {
    labels: array_dias_s,
    datasets: [{
        label: 'Accesos',
      data: array_cantidades_s,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false 
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

// **************** Conectados Hermosillo *********************** //
var hermosillo = document.getElementById("ConectadosHermosillo").getContext('2d');
var dias_h = document.getElementById("array_dias_h").value;
var cantidades_h = document.getElementById("array_cantidad_h").value;
// Quitarle la ultima coma
let cut_dias_h = dias_h.slice(0, -1);
let cut_cantidades_h = cantidades_h.slice(0, -1);
// Transformar en array con comas
let array_dias_h = cut_dias_h.split(',');
let array_cantidades_h = cut_cantidades_h.split(',');

var Hermosillo = new Chart(hermosillo, {
  type: 'bar',
  data: {
    labels: array_dias_h,
    datasets: [{
        label: 'Accesos',
      data: array_cantidades_h,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false 
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

// **************** Conectados La paz*********************** //
var palmira = document.getElementById("ConectadosPalmira").getContext('2d');
var dias_p = document.getElementById("array_dias_p").value;
var cantidades_p = document.getElementById("array_cantidad_p").value;
// Quitarle la ultima coma
let cut_dias_p = dias_p.slice(0, -1);
let cut_cantidades_p = cantidades_p.slice(0, -1);
// Transformar en array con comas
let array_dias_p = cut_dias_p.split(',');
let array_cantidades_p = cut_cantidades_p.split(',');

var Palmira = new Chart(palmira, {
  type: 'bar',
  data: {
    labels: array_dias_p,
    datasets: [{
        label: 'Accesos',
      data: array_cantidades_p,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false 
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

// **************** Conectados Corpo*********************** //
var corporativo = document.getElementById("ConectadosCorpo").getContext('2d');
var dias_cp = document.getElementById("array_dias_cp").value;
var cantidades_cp = document.getElementById("array_cantidad_cp").value;
// Quitarle la ultima coma
let cut_dias_cp = dias_cp.slice(0, -1);
let cut_cantidades_cp = cantidades_cp.slice(0, -1);
// Transformar en array con comas
let array_dias_cp = cut_dias_cp.split(',');
let array_cantidades_cp = cut_cantidades_cp.split(',');

var Corpo = new Chart(corporativo, {
  type: 'bar',
  data: {
    labels: array_dias_cp,
    datasets: [{
        label: 'Accesos',
      data: array_cantidades_cp,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4,
      datalabels: {
        display: false 
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