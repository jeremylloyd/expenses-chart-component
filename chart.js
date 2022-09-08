// Load JSON data
let data;
console.log("Getting data...");
fetch("./data.json")
  .then((f) => f.json())
  .then((obj) => loadChartData(obj));

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById("main"));

// Resize the chart whenever the browser is
window.onresize = function () {
  myChart.resize();
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
    title: {
      text: "ECharts Getting Started Example",
    },
    tooltip: {},
    legend: {
      data: ["sales"],
    },
    xAxis: {
      data: days,
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data: amounts,
        itemStyle: {
          color: "hsl(10, 79%, 65%)",
        },
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
