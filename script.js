d3.csv("GoogleTrendsComparingDesigners.csv").then(function(datapoints){
  datapoints.forEach(d => {d.H=+d.Height;});
  console.log(datapoints)
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

  const labels = date;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Chanel,
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

});

