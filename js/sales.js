'use strict';
var stores = [];

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store_Data(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale) {
  this.store = storeName;
  stores.push(this.store);
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.randCustomersPerHour = 0;
  this.cookiesPurchasedHourly = 0;
  this.cookiesHourlyArray = [];
  this.totalCookies = 0;
}

console.log(stores);

Store_Data.prototype.getRandCustomersPerHour = function () {
  this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

};

Store_Data.prototype.getCookiesPurchasedHourly = function () {
  for (var i = 0; i < hoursOpen.length; i++) {
    this.cookiesPurchasedHourly = Math.ceil(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));
    this.cookiesHourlyArray.push(this.cookiesPurchasedHourly);
    this.totalCookies += this.cookiesPurchasedHourly;
  }
  // console.log(this); WORKS - gives me all the stores and their data here - put into table
};

Store_Data.prototype.render = function () {
  var storesData = document.getElementById('tableBody');
  var storesDataTr = document.createElement('tr');
  storesData.appendChild(storesDataTr);

  var storesDataTh = document.createElement('th');
  storesDataTh.textContent = this.store;
  storesDataTr.appendChild(storesDataTh);

  for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
    var storesCookieSales = document.createElement('td');
    storesCookieSales.textContent = this.cookiesHourlyArray[i];
    storesDataTr.appendChild(storesCookieSales);
  }

  var storesTotals = document.createElement('td');
  storesTotals.textContent = this.totalCookies;
  storesDataTr.appendChild(storesTotals);

}; // console.log(this); WORKS - added all stores and data to the table

// HEADER: Hours
var hoursThead = document.getElementById('Hours_Open');
var hoursTr = document.createElement('tr');
hoursThead.appendChild(hoursTr);

var thElH = document.createElement('th');
hoursTr.appendChild(thElH);

for (var i = 0; i < hoursOpen.length; i++) {
  var hoursOpenTh = document.createElement('th');
  hoursOpenTh.textContent = hoursOpen[i];
  hoursTr.appendChild(hoursOpenTh);
}

var tHead = document.createElement('th');
tHead.textContent = 'Totals';
hoursTr.appendChild(tHead);

// console.log(this); WORKS

// FOOTER: Totals

var tFoot = document.getElementById('Hourly_Total');
var FootTr = document.createElement('tr');
tFoot.appendChild(FootTr);

// eslint-disable-next-line no-redeclare
for (var i = 0; i < hoursOpen.length; i++) {

  var hourlyTotal = 0;

  for (var j = 0; j < stores.length; j++); {
    // hourlyTotal += stores[j].cookiesHourlyArray[i];
  }
}
console.log();


var FootTh = document.createElement('th');
FootTh.textContent = 'Totals';
FootTr.appendChild(FootTh);

var FootTd = document.createElement('td');
FootTd.textContent = hourlyTotal;
FootTr.appendChild(FootTd);

var firstPike = new Store_Data('First & Pike', 23, 65, 6.3);
var seaTac = new Store_Data('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store_Data('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store_Data('Capitol Hill', 20, 38, 2.3);
var alki = new Store_Data('Alki', 2, 16, 4.6);

firstPike.getRandCustomersPerHour();
firstPike.getCookiesPurchasedHourly();
firstPike.render();

seaTac.getRandCustomersPerHour();
seaTac.getCookiesPurchasedHourly();
seaTac.render();

seaCenter.getRandCustomersPerHour();
seaCenter.getCookiesPurchasedHourly();
seaCenter.render();

capitolHill.getRandCustomersPerHour();
capitolHill.getCookiesPurchasedHourly();
capitolHill.render();

alki.getRandCustomersPerHour();
alki.getCookiesPurchasedHourly();
alki.render();
