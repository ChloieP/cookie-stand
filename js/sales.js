'use strict';

var pike = {
  name: 'Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  getAvgCustHour: function(minCust, maxCust) {
    console.log();
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  getAvgCookies: function(avgSale, getAvgCustHour) {
    return Math.floor(Math.round) * (avgSale * getAvgCustHour);
  },
};

function showAvgCustHour() {
  var hours = ['6am', '7am', '8am', ' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var cookiesPerHour = [];

  for (var i = 0; i < hours.length; i++) {
    cookiesPerHour.push(pike.getAvgCustHour(pike.minCust, pike.maxCust));
  }
}

showAvgCustHour();

function DailySalesProjection(){
  var PikeElement = document.getElementById('DailySalesProjection');
  var h2 = document.createElement('h2');
  h2.textContent = 'First and Pike';
  PikeElement.appendChild(h2);
}

// var PikeElement = document.getElementById('DailySalesProjection');

// var h2 = document.createElement('h2');
// h2.textContent = 'First and Pike';
// PikeElement.appendChild(h2);

// hoursArray[]

// make lines var PikeElement  --> hoursArray[] a function, figure out how to access the values of array in line 18

//  <section id="DailySalesProjection">

// var seaTac = {
//   name: 'SeaTac',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   getAvgCustomersHour = function getRandomInt(minCust, maxCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// };

// var seaCenter = {
//   name: 'SeaCenter',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   getAvgCustomersHour = function getRandomInt(minCust, maxCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// };

// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   getAvgCustomersHour = function getRandomInt(minCust, maxCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// };

// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   getAvgCustomersHour = function getRandomInt(minCust, maxCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
// };

