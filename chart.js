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
      text: "Spending - Last 7 days",
      textStyle: {
        color: "hsl(25, 47%, 15%)",
        fontSize: "24px",
      },
      textAlign: "left",
    },
    grid: {
      left: "3%",
      right: "3%",
      top: "10%",
      bottom: 40,
    },
    tooltip: {
      // formatter: '{b}: {c}',
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
          barBorderRadius: 4,
        },
        barCategoryGap: "25%",
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
