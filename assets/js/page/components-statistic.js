"use strict";

// Grafica para tikets
var ctx = document.getElementById("myChart2").getContext('2d');
var hoteles = document.getElementById("cantidad_hoteles").value;
var hoteles_t = document.getElementById("cantidad_tikets").value;
// Quitarle la ultima coma
let cutHoteles = hoteles.slice(0, -1);
let cutTikets = hoteles_t.slice(0, -1);
// Transformar en array con comas
let hoteles_array = cutHoteles.split(',');
let hoteles_tikets = cutTikets.split(',');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: hoteles_array,
    datasets: [{
      label: 'Reportes',
      data: hoteles_tikets,
      borderWidth: 2,
      backgroundColor: '#E9AD66',
      borderColor: '#E9AD66',
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
          stepSize: 60
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




