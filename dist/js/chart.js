"use strict";

// Pie Chart
{
  var ctx = document.getElementById("chart-pie-1");
  var ctx = document.getElementById("chart-pie-1").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Hồ Chí Minh", "Hà Nội", "Các tỉnh khác"],
      datasets: [{
        data: [6, 3, 1],
        backgroundColor: ["#7460ee", "#55ce63", "#ffbc34"],
        borderColor: ["#7460ee", "#55ce63", "#ffbc34"],
        borderWidth: 2
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Biểu đồ tròn 1',
        fontSize: 18
      }
    }
  });
}
{
  var pieChart = document.getElementById("chart-pie-2");
  var pieChart = document.getElementById("chart-pie-2").getContext("2d");
  var myChart = new Chart(pieChart, {
    type: "pie",
    data: {
      labels: ["Việt Nam", "Thái Lan", "Các nước khác"],
      datasets: [{
        data: [8, 1, 1],
        backgroundColor: ["#7460ee", "#55ce63", "#ffbc34"],
        borderColor: ["#7460ee", "#55ce63", "#ffbc34"],
        borderWidth: 2
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Biểu đồ tròn 2',
        fontSize: 18
      }
    }
  });
} // Bar chart

{
  var barChart = document.getElementById("chart-bar").getContext("2d");
  var myBarChart = new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [{
        label: "Doanh Thu",
        backgroundColor: "#7460ee",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        // hoverBackgroundColor: "rgba(85,193,254,0.8)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [20, 25, 50, 55, 73, 70, 80, 90, 210, 250, 255, 300]
      }, {
        label: "Lợi nhuận",
        backgroundColor: "#55ce63",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        // hoverBackgroundColor: "rgba(85,193,254,0.8)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [10, 20, 45, 50, 60, 60, 70, 80, 190, 210, 235, 250]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Biểu đồ cột',
        fontSize: 18
      }
    }
  });
}
{
  var lineChart = document.getElementById("chart-line").getContext("2d");
  var myChart = new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [{
        label: "Lợi nhuận",
        borderColor: "#7460ee",
        pointBorderColor: "#7460ee",
        lineTension: 0,
        pointBackgroundColor: "#7460ee",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [100, 110, 120, 140, 160, 170, 190, 200, 220, 250, 250, 280]
      }, {
        label: "Doanh thu",
        borderColor: "#55ce63",
        pointBorderColor: "#55ce63",
        pointBackgroundColor: "#55ce63",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [150, 160, 180, 205, 255, 260, 270, 290, 300, 320, 350, 380]
      }, {
        label: "Thua lỗ",
        borderColor: "#ffbc34",
        pointBorderColor: "#ffbc34",
        pointBackgroundColor: "#ffbc34",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [200, 190, 180, 170, 160, 150, 140, 130, 120, 100, 80, 60, 20]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Biểu đồ đường',
        fontSize: 18
      }
    }
  });
}
{
  // Chart bar horizontal
  var barChart1 = document.getElementById("chart-bar-horizontal").getContext("2d");
  var myBarChart = new Chart(barChart1, {
    type: 'horizontalBar',
    data: {
      labels: ["Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4", "Ngày 5", "Ngày 6"],
      datasets: [{
        label: "Doanh Thu",
        backgroundColor: "rgba(159, 206, 71, 1)",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        hoverBackgroundColor: "rgba(159, 206, 71, 1)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [30, 45, 50, 55, 70, 75]
      }, {
        label: "Vốn",
        backgroundColor: "rgba(123, 189, 239, 1)",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        hoverBackgroundColor: "rgba(123, 189, 239, 1)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [18, 20, 25, 40, 30, 50]
      }, {
        label: "Lợi nhuận",
        backgroundColor: "rgba(240, 133, 98, 1)",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        hoverBackgroundColor: "rgba(240, 133, 98, 1)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [12, 25, 25, 15, 40, 30]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Biểu đồ cột ngang',
        fontSize: 18
      },
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        display: true
      },
      animation: {
        easing: "easeOutQuart"
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(51, 51, 51, 1)',
            beginAtZero: true,
            padding: 15
          },
          gridLines: {
            display: true,
            corlor: "#f0f0f1",
            zeroLineColor: "#f0f0f1"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'rgba(51, 51, 51, 1)',
            beginAtZero: true,
            padding: 15
          },
          gridLines: {
            display: true,
            corlor: "#f0f0f1",
            zeroLineColor: "#f0f0f1"
          }
        }]
      }
    }
  });
}
{
  var barChart2 = document.getElementById("chart-bar2").getContext("2d");
  var myBarChart2 = new Chart(barChart2, {
    type: "bar",
    data: {
      labels: ["Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4", "Ngày 5", "Ngày 6", "Ngày 7", "Ngày 8", "Ngày 9", "Ngày 10"],
      datasets: [{
        label: "Số lượng vật liệu",
        backgroundColor: "rgba(159, 206, 71, 1)",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        // hoverBackgroundColor: "rgba(85,193,254,0.8)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [150, 175, 190, 200, 215, 230, 250, 280, 290, 330]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Xưởng 3',
        fontSize: 18
      },
      legend: {
        position: "bottom",
        display: true
      }
    }
  });
}