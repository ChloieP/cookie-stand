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
        liEl.textContent = 'Total: ' + totalCookies;
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
      console.log(totalCookies);
      if (i===hoursOpen.length - 1){
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + totalCookies;
        seaTacuL.appendChild(liEl);
        console.log(totalCookies);
      }
    }
  },
};

seaTac.getCookiesPurchasedHourly();
seaTac.getRandCustomersPerHour();
seaTac.render();

// var seaCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   getAvgCustHour: function(minCust, maxCust) {
//     console.log();
//     this.getAvgCustHour = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   getAvgCookiesHour: function() {
//     this.getAvgCookiesHour = Math.floor(Math.round) * (this.avgSale * this.getAvgCustHour);
//   },
//   dailySalesProjection: function(){
//     for (var i = 0; i < hours.length; i++) {

//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + seaCenter.getAvgCookiesHour;
//       var h3 = document.createElement('Seattle Center');
//       document.getElementById('SeaCenter').appendChild(liEl);
//       h3.appendGrandchild(liEl);
//     }
//   },
// };
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   getAvgCustHour: function(minCust, maxCust) {
//     console.log(20, 38);
//     this.getAvgCustHour = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//     console.log(20, 38);
//   },
//   getAvgCookiesHour: function() {
//     this.getAvgCookiesHour = Math.floor(Math.round) * (this.avgSale * this.getAvgCustHour);
//   },
//   dailySalesProjection: function(){
//     for (var i = 0; i < hours.length; i++) {

//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + capitolHill.getAvgCookiesHour;
//       var h3 = document.createElement('Capitol Hill');
//       document.getElementById('capitolHill').appendChild(liEl);
//       h3.appendGrandchild(liEl);
//     }
//   },
// };
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   getAvgCustHour: function(minCust, maxCust) {
//     console.log();
//     this.getAvgCustHour = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   getAvgCookiesHour: function() {
//     this.getAvgCookiesHour = Math.floor(Math.round) * (this.avgSale * this.getAvgCustHour);
//   },
//   dailySalesProjection: function(){
//     for (var i = 0; i < hours.length; i++) {

//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + alki.getAvgCookiesHour;
//       var h3 = document.createElement('Alki');
//       document.getElementById('Alki').appendChild(liEl);
//       h3.appendGrandchild(liEl);
//     }
//   },
// };
