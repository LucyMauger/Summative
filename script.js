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
      label: 'Lagerfeld',
      backgroundColor: 'rgb(77, 64, 65)',
      borderColor: 'rgb(77, 64, 65)',
      data: Lagerfeld,
    },
    {
      label: 'McQueen',
      backgroundColor: 'rgb(187, 167, 169)',
      borderColor: 'rgb(187, 167, 169)',
      data: McQueen,
    },
    {
      label: 'Dior',
      backgroundColor: 'rgb(226, 161, 168)',
      borderColor: 'rgb(226, 161, 168)',
      data: Dior,
    },
    {
      label: 'Westwood',
      backgroundColor: 'rgb(56, 35, 37)',
      borderColor: 'rgb(56, 35, 37)',
      data: Westwood,
    },
    {
      label: 'Chanel',
      backgroundColor: 'rgb(116, 46, 53)',
      borderColor: 'rgb(116, 46, 53)',
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

function newsletter(){
  email=document.getElementById("newsletterEmail").value;
  console.log(email);
  document.getElementById("newsletterEmail").value=null;
}
function newDesigner(){
  newDesigner=document.getElementById("newDesigner").value;
  console.log(newDesigner);
  document.getElementById("newDesigner").value=null;
}
