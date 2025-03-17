const ctx = document.getElementById('precipitationChart').getContext('2d');

const precipitationData = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Annual Precipitation (inches)',
      data: [40.97, 35.92, 45.21, ..., 50.30],
      borderColor: 'blue',
      fill: false,
      yAxisID: 'y',
    },
  ],
};
const ctx = document.getElementById('precipitationChart').getContext('2d');
const precipitationChart = new Chart(ctx, {
  type: 'line',
  data: precipitationData,
  options: {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Annual Precipitation (inches)',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Monthly Precipitation (inches)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  },
});
