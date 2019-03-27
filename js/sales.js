'use strict';
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalCookies = 0;
var firstPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  randCustomersPerHour: 0,
  cookiesPurchasedHourly:0,
  cookieArray: [],
  getRandCustomersPerHour: function () {
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  getCookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  render: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.getRandCustomersPerHour();
      this.getCookiesPurchasedHourly();
      var firstPikeuL = document.getElementById('firstPikeSales');
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesPurchasedHourly + ' cookies';
      firstPikeuL.appendChild(liEl);
      this.cookieArray.push(this.cookiesPurchasedHourly);
      totalCookies = this.cookiesPurchasedHourly + totalCookies;
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies + ' cookies';
        firstPikeuL.appendChild(liEl);
      }
    }
  },
};

firstPike.getCookiesPurchasedHourly();
firstPike.getRandCustomersPerHour();
firstPike.render();

var seaTac = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  randCustomersPerHour: 0,
  cookiesPurchasedHourly:0,
  cookieArray: [],
  getRandCustomersPerHour: function () {
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  getCookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  render: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.getRandCustomersPerHour();
      this.getCookiesPurchasedHourly();
      var seaTacuL = document.getElementById('seaTacSales');
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesPurchasedHourly + ' cookies';
      seaTacuL.appendChild(liEl);
      this.cookieArray.push(this.cookiesPurchasedHourly);
      totalCookies = this.cookiesPurchasedHourly + totalCookies;
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies + ' cookies';
        seaTacuL.appendChild(liEl);
      }
    }
  },
};

seaTac.getCookiesPurchasedHourly();
seaTac.getRandCustomersPerHour();
seaTac.render();

var seaCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 3.7,
  randCustomersPerHour: 0,
  cookiesPurchasedHourly:0,
  cookieArray: [],
  getRandCustomersPerHour: function () {
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  getCookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  render: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.getRandCustomersPerHour();
      this.getCookiesPurchasedHourly();
      var seaCenteruL = document.getElementById('seaCenterSales');
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesPurchasedHourly + ' cookies';
      seaCenteruL.appendChild(liEl);
      this.cookieArray.push(this.cookiesPurchasedHourly);
      totalCookies = this.cookiesPurchasedHourly + totalCookies;
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies + ' cookies';
        seaCenteruL.appendChild(liEl);
      }
    }
  },
};

seaCenter.getCookiesPurchasedHourly();
seaCenter.getRandCustomersPerHour();
seaCenter.render();

var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 2.3,
  randCustomersPerHour: 0,
  cookiesPurchasedHourly:0,
  cookieArray: [],
  getRandCustomersPerHour: function () {
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  getCookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  render: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.getRandCustomersPerHour();
      this.getCookiesPurchasedHourly();
      var capitolHilluL = document.getElementById('capitolHillSales');
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesPurchasedHourly + ' cookies';
      capitolHilluL.appendChild(liEl);
      this.cookieArray.push(this.cookiesPurchasedHourly);
      totalCookies = this.cookiesPurchasedHourly + totalCookies;
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies + ' cookies';
        capitolHilluL.appendChild(liEl);
      }
    }
  },
};

capitolHill.getCookiesPurchasedHourly();
capitolHill.getRandCustomersPerHour();
capitolHill.render();

var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerSale: 4.6,
  randCustomersPerHour: 0,
  cookiesPurchasedHourly:0,
  cookieArray: [],
  getRandCustomersPerHour: function () {
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  getCookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  render: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.getRandCustomersPerHour();
      this.getCookiesPurchasedHourly();
      var alkiuL = document.getElementById('alkiSales');
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesPurchasedHourly + ' cookies';
      alkiuL.appendChild(liEl);
      this.cookieArray.push(this.cookiesPurchasedHourly);
      totalCookies = this.cookiesPurchasedHourly + totalCookies;
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies + ' cookies';
        alkiuL.appendChild(liEl);
      }
    }
  },
};

alki.getCookiesPurchasedHourly();
alki.getRandCustomersPerHour();
alki.render();
