d3.csv("GoogleTrendsComparingDesigners.csv").then(function(data){
  data.forEach(d => {d.H=+d.Height;});
  console.log(data)
  const date = [];
  const Lagerfeld = [];
  const McQueen = [];
  const Dior = [];
  const Westwood = [];
  const Chanel = [];

  for (i = 0; i < datapoints.length; i++) {
    date.push(datapoints[i].date)
    Lagerfeld.push(datapoints[i].Lagerfeld)
    McQueen.push(datapoints[i].McQueen)
    Dior.push(datapoints[i].Dior)
    Westwood.push(datapoints[i].Westwood)
    Chanel.push(datapoints[i].Chanel)
  }

  console.log(date)

});

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