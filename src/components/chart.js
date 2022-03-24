import * as chartJs from "chart.js";

let chart;

export const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();

  const formatPart = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return `${formatPart(day)}/${formatPart(month + 1)}`;
};

export const renderChart = (readings) => {
  chartJs.Chart.defaults.font.size = "10px";

  chartJs.Chart.register.apply(
    null,
    Object.values(chartJs).filter((chartClass) => chartClass.id)
  );

  const labels = readings.map(({ time }) => formatDateLabel(time));
  const values = readings.map(({ value }) => value);

  //total energy consumption
  const sum = values.reduce(function (pre, cur, index, array) {
    return pre + cur;
  });
  // console.log(sum);

  //get the nearest integer
  const sum1 = sum.toFixed(0);

  // console.log(sum1);

  // card1 data (costx0.138)
  const cost = sum * 0.138;
  // console.log(cost);
  const cost1 = cost.toFixed(0);
  // console.log(cost1);

  // push cost to card1
  document.getElementById("crd1").innerHTML = "$ " + cost1;
  // console.log(3);

  //push total consumption to card2
  document.getElementById("crd2").innerHTML = sum1 + " kWh";

  //card3 data (sum x 0.0002532)
  const footPrint = sum * 0.0002532;
  const fooPrint1 = footPrint.toFixed(4);
  // console.log(fooPrint1);
  // push footprint to card3
  document.getElementById("crd3").innerHTML = fooPrint1 + " Tonnes";

  const data = {
    labels: labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: "#5A8EDA",
        borderRadius: 10,
      },
    ],
  };

  if (chart) {
    chart.destroy();
  }

  chart = new chartJs.Chart("usageChart", {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  });
};
