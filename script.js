/**
 * Creates line graph using code adapted from chart.js (https://www.chartjs.org/docs/latest/samples/line/line.html)
 * Uses csv file create using Google Trends
 * @returns {myChart} Line Graph
 */
d3.csv('GoogleTrendsComparingDesigners.csv').then(function (datapoints) {
  /**
   * Makes data from csv into an array
   */
  datapoints.forEach(d => { d.H = +d.Height; });

  /**
   * Creates separate arrays for graph labels and data
   */
  const Date = [];
  const Dior = [];
  const Chanel = [];
  const McQueen = [];
  const McCartney = [];
  const Versace = [];

  /**
   * Separates main array into separate arrays for graph labels and data
   */
  for (i = 0; i < datapoints.length; i++) {
    Date.push(datapoints[i].Date);
    Dior.push(datapoints[i].Dior);
    Chanel.push(datapoints[i].Chanel);
    McQueen.push(datapoints[i].McQueen);
    McCartney.push(datapoints[i].McCartney);
    Versace.push(datapoints[i].Versace);
  }

  /**
   * Line graph code adapted from chart.js (https://www.chartjs.org/docs/latest/samples/line/line.html)
   */
  const labels = Date;
  const data = {
    labels: labels,
    datasets: [{
      label: 'Dior',
      backgroundColor: 'rgb(77, 64, 65)',
      borderColor: 'rgb(77, 64, 65)',
      data: Dior
    },
    {
      label: 'Chanel',
      backgroundColor: 'rgb(187, 167, 169)',
      borderColor: 'rgb(187, 167, 169)',
      data: Chanel
    },
    {
      label: 'McQueen',
      backgroundColor: 'rgb(226, 161, 168)',
      borderColor: 'rgb(226, 161, 168)',
      data: McQueen
    },
    {
      label: 'McCartney',
      backgroundColor: 'rgb(56, 35, 37)',
      borderColor: 'rgb(56, 35, 37)',
      data: McCartney
    },
    {
      label: 'Versace',
      backgroundColor: 'rgb(116, 46, 53)',
      borderColor: 'rgb(116, 46, 53)',
      data: Versace
    }]
  };

  /**
   * Formats points to not have circles
   */
  const genericOptions = {
    fill: false,
    interaction: {
      intersect: false
    },
    radius: 0
  };

  const config = {
    type: 'line',
    data: data,
    options: genericOptions
  };

  const myChart = new Chart(
    document.getElementById('GoogleChart'),
    config
  );
});

d3.csv('LeadingBrands2020.csv').then(function (datapoints) {
  datapoints.forEach(d => { d.H = +d.Height; });

  const Brand = [];
  const Value = [];

  for (i = 0; i < datapoints.length; i++) {
    Brand.push(datapoints[i].Brand);
    Value.push(datapoints[i].Value);
  }

  const labels = Brand;
  const data = {
    labels: labels,
    datasets: [{
      label: 'Top 15 Brands by Value in 2020 ($b)',
      backgroundColor: 'rgb(116, 46, 53)',
      borderColor: 'rgb(116, 46, 53)',
      data: Value
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Leading Apparel Brands of 2021'
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('BrandValueGraph'),
    config
  );
});

function newsletter () {
  let email = '';
  email = document.getElementById('newsletterEmail').value;
  console.log(email);
  document.getElementById('newsletterEmail').value = null;
}

function newDesigner () {
  const designerArray = ['Coco Chanel', 'Chanel', 'Christian Dior', 'Dior'];
  if (designerArray.indexOf(document.getElementById('newDesigner').value) !== -1) {
    alert('This designer is already on our website.');
  } else {
    let newSuggestion = '';
    newSuggestion = document.getElementById('newDesigner').value;
    console.log(newSuggestion);
    document.getElementById('newDesigner').value = null;
  }
}

/**
 * Creates an oject for a new designer
 * @param {string} firstname Designer's firstname
 * @param {string} surname Designer's surname
 * @param {number} birthYear Designer's birth year
 * @returns {object} A designer object
 */
function createDesigner (firstname, surname, birthYear) {
  firstname = this.firstname;
  surname = this.surname;
  birthYear = this.birthYear;
};

createDesigner('Coco', 'Chanel', 1883);
createDesigner('Christian', 'Dior', 1905);
