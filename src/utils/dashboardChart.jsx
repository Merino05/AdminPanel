import Chart from "chart.js/auto";

let chartInstance = null; // ذخیره نمونه نمودار

export const setDashboardChart = (labels, datapoints) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#0062ff",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: " میلیون تومان",
          },
        },
      },
    },
  };

  const canvas = document.getElementById("myChart");
  
  // اگر canvas وجود ندارد، خارج شو
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  
  // اگر نمونه قبلی وجود دارد، آن را نابود کن
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }
  
  // ایجاد نمودار جدید
  chartInstance = new Chart(ctx, config);
};