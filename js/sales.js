'use strict';
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var allStores = [];

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
  return this.cookiesPurchasedHourly = Math.ceil(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

};


Store_Data.prototype.render = function () {
  var theStores = document.getElementById('Store_List');
  var tdStores = document.createElement('td');
  tdStores.textContent = this.store;
  theStores.appendChild(tdStores);

};

var theStores2 = document.getElementById('Store_List');
var tdStores2 = document.createElement('td');
tdStores2.textContent = this.cookiesPurchasedHourly;
theStores2.appendChild(tdStores2);

for (var i = 0; i < hoursOpen.length; i++) {
  var hoursList = document.getElementById('Hours_List');
  var thElH = document.createElement('Length');
  thElH.textContent = hoursOpen[i] + ' ';
  hoursList.appendChild(thElH);
}

for (var i = 0; i < this.cookiesPurchasedHourly.length; i++) {
  var td = document.createElement('td');
  td.textContent = this.cookieArray[i];
  // tr.appendChild(td); Look at HTML structure through Slack lenss
}

Store_Data.prototype.totalCookies = function(){
  this.cookieArray.push(this.cookiesPurchasedHourly);
  this.totalCookies = this.cookiesPurchasedHourly + this.totalCookies;
  for (var i = 0; i === hoursOpen.length; i--) {
    var tFoot = document.getElementById('Hourly_Total');
    var trFoot = document.getElementById('All_Stores');
    trFoot.textContent = `${this.totalCookies}`;
    tFoot.appendChild(trFoot);
  }
};

var firstPike = new Store_Data('First & Pike', 23, 65, 6.3);
var seaTac = new Store_Data('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store_Data('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store_Data('Capitol Hill', 20, 38, 2.3);
var alki = new Store_Data('Alki', 2, 16, 4.6);

firstPike.getCookiesPurchasedHourly();
firstPike.getRandCustomersPerHour();
firstPike.render();

seaTac.getCookiesPurchasedHourly();
seaTac.getRandCustomersPerHour();
seaTac.render();

seaCenter.getCookiesPurchasedHourly();
seaCenter.getRandCustomersPerHour();
seaCenter.render();

capitolHill.getCookiesPurchasedHourly();
capitolHill.getRandCustomersPerHour();
capitolHill.render();

alki.getCookiesPurchasedHourly();
alki.getRandCustomersPerHour();
alki.render();


