document.addEventListener("DOMContentLoaded", function() {
  var ctxEstandar = document.getElementById("myChart-Estandar").getContext('2d');
  var estandard_cantidades_input = document.getElementById("usuario_estandard").value;
  var nombres_input = document.getElementById("usuario_estandard_nombres").value;

    // Parse the JSON strings to JavaScript arrays
    var estandard_cantidades = JSON.parse(estandard_cantidades_input);
    var nombres = JSON.parse(nombres_input);

  var myChart3 = new Chart(ctxEstandar, {
    type: 'bar',
    data: {
      labels: nombres,
      datasets: [{
        label: 'Reportes',
        data: estandard_cantidades,
        borderWidth: 2,
        backgroundColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
        borderColor: ['#1F868F','#256FD6','#b66dff','#F99696','#FF8F1F'],
        borderWidth: 2.5,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
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
            beginAtZero: false,
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
});
