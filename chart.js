// Load JSON data
let data;
fetch("./data.json")
  .then((f) => f.json())
  .then((obj) => loadChartData(obj));

// Initialize the echarts instance based on the prepared dom
const chart = document.getElementById("chart-expenses");
var myChart = echarts.init(chart);

// Resize the chart whenever the browser is
window.onresize = function () {
  myChart.resize();

  let option = {
    xAxis: {
      axisLabel: {
        fontSize: window.innerWidth >= 600 ? 15 : 12,
        margin: window.innerWidth >= 600 ? 12 : 15,
      },
    },
  };
  myChart.setOption(option);
};

function loadChartData(obj) {
  // Specify the configuration items and data for the chart
  let days = obj.map((i) => i.day);
  let amounts = obj.map((i) => {
    i.amount;
  });
  amounts = [];
  for (let i = 0; i < obj.length; i++) {
    let d = {
      value: obj[i].amount,
    };
    if (obj[i].day === "wed") {
      d["itemStyle"] = {
        color: "hsl(186, 34%, 60%)",
      };
    }
    amounts.push(d);
  }

  var option = {
    grid: {
      left: -5,
      right: -5,
      top: 0,
      bottom: "17%",
    },
    tooltip: {
      formatter: "${c}",
      hideDelay: 200,
      position: "top",
      transitionDuration: 0.3,
      backgroundColor: "hsl(25, 47%, 15%)",
      borderWidth: 0,
      textStyle: {
        color: "hsl(33, 100%, 98%)",
        fontWeight: 700,
        fontSize: 18,
      },
      padding: [5, 7],
    },
    textStyle: {
      fontFamily: "DM Sans",
      color: "hsl(28, 10%, 53%)",
    },
    legend: {
      show: false,
    },
    xAxis: {
      data: days,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontSize: window.innerWidth >= 600 ? 15 : 12,
        margin: 15,
      },
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        name: "sales",
        type: "bar",
        data: amounts,
        itemStyle: {
          color: "hsl(10, 79%, 65%)",
          borderRadius: 4,
        },
        barCategoryGap: "25%",
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
