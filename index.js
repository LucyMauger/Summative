d3.csv("GoogleTrendsComparingDesigners.csv").then(function(data){
  data.forEach(d => {d.H=+d.Height;});
  console.log(data)
  dataArray = data
});

const arrayColumn = (arr, n) => arr.map(x => x[n]);

dateColumn = arrayColumn(dataArray, 0));

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: dataArray,
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);