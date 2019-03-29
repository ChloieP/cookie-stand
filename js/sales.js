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
  for (var i = 0; i < hoursOpen.length; i++) {
    this.cookiesPurchasedHourly = Math.ceil(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));
    this.cookieArray.push(this.cookiesPurchasedHourly);
  }
  // console.log(this); WORKS - gives me all the stores and their data here - put into table
};

Store_Data.prototype.render = function () {
  var storesList = document.getElementById('Store_List');
  var storesListRow = document.createElement('tr');
  storesListRow.textContent = this.store;
  storesList.appendChild(storesListRow);
  for (var i = 0; i < this.cookieArray.length; i++) {
    var storesCookieSales = document.createElement('td');
    storesCookieSales.textContent = this.cookieArray[i];
    storesListRow.appendChild(storesCookieSales);
  }
};
// console.log(this); WORKS - added all stores and data to the table

// HEADER: Hours
for (var i = 0; i < hoursOpen.length; i++) {
  var hoursList = document.getElementById('Hours_List');
  var thElH = document.createElement('Length');
  thElH.textContent = hoursOpen[i] + ' ';
  hoursList.appendChild(thElH);
}
// console.log(this.name); WORKS - add all hours to table

Store_Data.prototype.totalCookies = function(){
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


