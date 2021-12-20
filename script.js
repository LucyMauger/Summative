d3.csv("GoogleTrendsComparingDesigners.csv").then(function(datapoints){
  datapoints.forEach(d => {d.H=+d.Height;});

  const Date = [];
  const Dior = [];
  const Chanel = [];
  const McQueen = [];
  const McCartney = [];
  const Versace = [];

  for (i = 0; i < datapoints.length; i++) {
    Date.push(datapoints[i].date)
    Dior.push(datapoints[i].Dior)
    Chanel.push(datapoints[i].Chanel)
    McQueen.push(datapoints[i].McQueen)
    McCartney.push(datapoints[i].McCartney)
    Versace.push(datapoints[i].Versace)
  }

  const labels = Date;
  const data = {
    labels: labels,
    datasets: [{
      label: 'Dior',
      backgroundColor: 'rgb(77, 64, 65)',
      borderColor: 'rgb(77, 64, 65)',
      data: Dior,
    },
    {
      label: 'Chanel',
      backgroundColor: 'rgb(187, 167, 169)',
      borderColor: 'rgb(187, 167, 169)',
      data: Chanel,
    },
    {
      label: 'McQueen',
      backgroundColor: 'rgb(226, 161, 168)',
      borderColor: 'rgb(226, 161, 168)',
      data: McQueen,
    },
    {
      label: 'McCartney',
      backgroundColor: 'rgb(56, 35, 37)',
      borderColor: 'rgb(56, 35, 37)',
      data: McCartney,
    },
    {
      label: 'Versace',
      backgroundColor: 'rgb(116, 46, 53)',
      borderColor: 'rgb(116, 46, 53)',
      data: Versace,
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

function showSection(section){
  document.getElementById(section).style.visibility = "visible";
}