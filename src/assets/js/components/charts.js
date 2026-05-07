/**
 * Charts
 * @requires https://github.com/gionkunz/chartist-js
 */

export default (() => {
  const chart = document.querySelectorAll('[data-chart]')

  if (chart.length === 0) return

  // Line chart
  for (let i = 0; i < chart.length; i++) {
    const dataOptions = JSON.parse(chart[i].dataset.chart)
    new Chart(chart[i], dataOptions) // eslint-disable-line no-undef
  }
})()

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('salesChart');
  const chartData = JSON.parse(canvas.dataset.chart);
  new Chart(canvas.getContext('2d'), chartData);
});