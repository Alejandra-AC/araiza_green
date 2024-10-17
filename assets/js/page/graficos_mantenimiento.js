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