'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var Store_Data = function(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale) {
  this.store = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.randCustomersPerHour = 0;
  this.cookiesPurchasedHourly = 0;
  this.cookieArray = [];
  this.totalCookies = 0;

};

Store_Data.prototype.getRandCustomersPerHour = function () {
  this.randCustomersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers);

};

Store_Data.prototype.getCookiesPurchasedHourly = function () {
  for (var i = 0; i < hoursOpen.length; i++) {
    this.cookiesPurchasedHourly = Math.ceil(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));
    this.cookieArray.push(this.cookiesPurchasedHourly);
    this.totalCookies += this.cookiesPurchasedHourly;
  }
  console.log(this);
};

Store_Data.prototype.render = function () {
  var storesData = document.getElementById('tableBody');
  var storesDataTr = document.createElement('tr');
  storesData.appendChild(storesDataTr);

  var storesDataTh = document.createElement('th');
  storesDataTh.textContent = this.store;
  storesDataTr.appendChild(storesDataTh);

  for (var i = 0; i < this.cookieArray.length; i++) {
    var storesCookieSales = document.createElement('td');
    storesCookieSales.textContent = this.cookieArray[i];
    storesDataTr.appendChild(storesCookieSales);
  }

  var storesTotals = document.createElement('td');
  storesTotals.textContent = this.totalCookies;
  storesDataTr.appendChild(storesTotals);

// HEADER: Hours
var hoursThead = document.getElementById('Hours_Open');
var hoursTr = document.createElement('tr');
hoursThead.appendChild(hoursTr);
var thElH = document.createElement('th');
hoursTr.appendChild(thElH);

for (var i = 0; i < hoursOpen.length; i++) {
  var thElH = document.createElement('th');
  thElH.textContent = hoursOpen[i];
  hoursTr.appendChild(thElH);
}
var tHead = document.createElement('th');
tHead.textContent = 'Totals';
hoursTr.appendChild(tHead);

// FOOTER: Totals
Store_Data.prototype.totalCookies = function() {
  for (var i = 0; i < hoursOpen.length; i++) {
  //   var sum = this.cookieArray.reduce((a, b) => a + b);
  //   this.totalCookies.push(sum);
  // var tFoot = document.getElementById('Hourly_Total');
  // var trFoot = document.createElement('tr');
  trFoot.textContent = this.totalCookies;
  tFoot.appendChild(trFoot);
  // console.log(firstPike);
};


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