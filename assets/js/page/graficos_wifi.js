"use strict";

// **************** Wifi encuestas *********************** //
var ctx1 = document.getElementById("anoActual").getContext('2d');
var meses = document.getElementById("meses").value;
var wifi_anio_cantidades = document.getElementById("cantidades").value;
// Quitarle la ultima coma
let cut_meses = meses.slice(0, -1);
let cut_w_a_c = wifi_anio_cantidades.slice(0, -1);
// Transformar en array con comas
let array_meses = cut_meses.split(',');
let array_wifi_ano = cut_w_a_c.split(',');

var myChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: array_meses,
    datasets: [{
      label: 'Cantidad',
      data: array_wifi_ano,
      borderWidth: 2,
      backgroundColor: '#dc994a',
      borderColor: '#dc994a',
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

// **************** Pregunta 1 *********************** //
var ctx2 = document.getElementById("pre1").getContext('2d');
var pre1 = document.getElementById("array_pre1").value;

// Transformar en array con comas
let array_pre1 = pre1.split(',');

var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Excelente","Bueno","Regular","Malo","Muy Malo"],
    datasets: [{
      label: 'Cantidad',
      data: array_pre1,
      borderWidth: 2,
      backgroundColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
      borderColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
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

// **************** Pregunta 2 *********************** //
var ctx3 = document.getElementById("pre2").getContext('2d');
var pre2 = document.getElementById("array_pre2").value;

// Transformar en array con comas
let array_pre2 = pre2.split(',');

var myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ["Sencillo","Normal","Complicado"],
    datasets: [{
      label: 'Cantidad',
      data: array_pre2,
      borderWidth: 2,
      backgroundColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
      borderColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
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

// **************** Pregunta 3 *********************** //
var ctx4 = document.getElementById("pre3").getContext('2d');
var pre3 = document.getElementById("array_pre3").value;

// Transformar en array con comas
let array_pre3 = pre3.split(',');

var myChart4 = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ["Si","No"],
    datasets: [{
      label: 'Cantidad',
      data: array_pre3,
      borderWidth: 2,
      backgroundColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
      borderColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
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

// **************** Pregunta 4 *********************** //
var ctx5 = document.getElementById("pre4").getContext('2d');
var pre4 = document.getElementById("array_pre4").value;

// Transformar en array con comas
let array_pre4 = pre4.split(',');

var myChart5 = new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: ["Ninguno","Login","Lentitud","Desconexión"],
    datasets: [{
      label: 'Cantidad',
      data: array_pre4,
      borderWidth: 2,
      backgroundColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
      borderColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
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

// **************** Pregunta 5 *********************** //
var ctx6 = document.getElementById("pre5").getContext('2d');
var pre5 = document.getElementById("array_pre5").value;

// Transformar en array con comas
let array_pre5 = pre5.split(',');

var myChart6 = new Chart(ctx6, {
  type: 'bar',
  data: {
    labels: ["Si","No"],
    datasets: [{
      label: 'Cantidad',
      data: array_pre5,
      borderWidth: 2,
      backgroundColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
      borderColor: ['#FA896B','#dc994a','#FFAE1F','#13DEB9','#20c997'],
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
var ctx7 = document.getElementById("anoAnterior").getContext('2d');
var meses_a = document.getElementById("meses_a").value;
var wifi_anio_cantidades_a = document.getElementById("cantidades_a").value;
// Quitarle la ultima coma
let cut_meses_a = meses_a.slice(0, -1);
let cut_w_a_c_a = wifi_anio_cantidades_a.slice(0, -1);
// Transformar en array con comas
let array_meses_a = cut_meses_a.split(',');
let array_wifi_ano_a = cut_w_a_c_a.split(',');

var myChart7 = new Chart(ctx7, {
  type: 'bar',
  data: {
    labels: array_meses_a,
    datasets: [{
      label: 'Cantidad',
      data: array_wifi_ano_a,
      borderWidth: 2,
      backgroundColor: '#dc994a',
      borderColor: '#dc994a',
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