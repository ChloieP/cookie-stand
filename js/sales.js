'use strict';
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  estCustomersPerHour: 0,
  cookiesHourlyPurchased:0,
  cookieArray: [],
  randCustomersPerHour: function (){
    this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

  },
  cookiesPurchasedHourly: function () {
    this.cookiesPurchasedHourly = Math.floor(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

  },
  cookiesByTheTOD: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.randCustomersPerHour();
      this.cookiesPurchasedHourly();
      this.cookieArray.push(this.cookiesPurchasedHourly);
    }
  },
};

var render = function() {
  var parentElementH3 = document.getElementById('firstPike');
  var newElementuL = document.createElement('firstPikeSales');
  parentElementH3.appendChild(newElementuL);
};

// var seaTac = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
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
//       liEl.textContent = hours[i] + seaTac.getAvgCookiesHour;
//       var h3 = document.createElement('SeaTac Airport');
//       document.getElementById('SeaTac').appendChild(liEl);
//       h3.appendGrandchild(liEl);
//     }
//   },
// };
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
