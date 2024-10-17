"use strict";

// Grafica para requisiciones
var ctx = document.getElementById("myChart3").getContext('2d');
var nombres = document.getElementById("nombres_desarrollo").value;
var cantidad_r = document.getElementById("cantidad_requisiciones").value;

// Quitar ultima coma
let cutNombres = nombres.slice(0, -1);
let cutCantidades = cantidad_r.slice(0, -1);

let nombres_array = cutNombres.split(',');
let requi_array = cutCantidades.split(',');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nombres_array,
      datasets: [{
        label: 'Requisiciones',
        data: requi_array,
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