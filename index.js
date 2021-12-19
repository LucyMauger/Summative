var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  plugins: [ChartDataSource],
  options: {
    daatasource: {
      url: 'GoogleTrendsComparingDesigners.csv'
    }
  }
});
