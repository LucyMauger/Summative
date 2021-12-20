/**
 * Creates line graph using csv file from Google Trends and code adapted from chart.js (https://www.chartjs.org/docs/latest/samples/line/line.html)
 * @param {any} datapoints Data from CSV file
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
   * Assign data labels and datasets
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

  /**
   * Configure graph and use DOM to place on webpage
   */
  const myChart = new Chart(
    document.getElementById('GoogleChart'),
    config
  );
});

/**
 * Creates bar chart using csv file from UnitedFashion and code adapted from chart.js (https://www.chartjs.org/docs/latest/samples/bar/vertical.html)
 * @param {any} datapoints Data from CSV file
 * @returns {myChart} Line Graph
 */
d3.csv('LeadingBrands2020.csv').then(function (datapoints) {
  /**
   * Makes data from csv into an array
   */
  datapoints.forEach(d => { d.H = +d.Height; });

  /**
   * Creates separate arrays for graph labels and data
   */
  const Brand = [];
  const Value = [];

  /**
   * Separates main array into separate arrays for graph labels and data
   */
  for (i = 0; i < datapoints.length; i++) {
    Brand.push(datapoints[i].Brand);
    Value.push(datapoints[i].Value);
  }

  /**
   * Assign data labels and datasets
   */
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

  /**
   * Configure graph and use DOM to place on webpage
   */
  const myChart = new Chart(
    document.getElementById('BrandValueGraph'),
    config
  );
});

/**
 * Function used to get user input from text field (newsletter)
 * @returns {string} User email
 */
function newsletter () {
  let email = '';
  email = document.getElementById('newsletterEmail').value;
  console.log(email);
  document.getElementById('newsletterEmail').value = null;
}

/**
 * Function used to get user input from text field (suggestion for new designer)
 * @returns {string} New designer suggestion
 */
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
 * @param {string} fullname Designer's fullname
 * @param {number} birthYear Designer's birth year
 * @returns {object} A designer object
 */
function createDesigner (firstname, surname, birthYear) {
  firstname = this.firstname;
  surname = this.surname;
  fullname = this.firstname + ' ' + this.surname;
  birthYear = this.birthYear;
};

/**
 * Creates an oject for a new collection
 * @param {string} designer Collection designer's name
 * @param {string} fashionHouse Collection's fashion house
 * @param {number} year Collection's year
 * @param {string} season Collection's season
 * @param {string} type Collection's type
 * @param {string} collectionName Collection's combined name
 */
function createCollection (designer, fashionHouse, year, season, type) {
  designer = this.designer;
  fashionHouse = this.fashionHouse;
  year = this.year;
  season = this.season;
  type = this.type;
  collectionName = this.season + ' ' + this.year + ' ' + this.type;
};

/**
 * Create Designers
 */
Chanel = createDesigner('Coco', 'Chanel', 1883);
CDior = createDesigner('Christian', 'Dior', 1905);

/**
 * Create Collections
 */
DiorSpring1998 = createCollection('John Galliano', 'Dior', 1998, 'Spring', 'Couture');
ChanelSpring1992 = createCollection('Karl Lagerfeld', 'Chanel', 1992, 'Spring', 'Ready-to-Wear');
