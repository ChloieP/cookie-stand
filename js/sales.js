'use strict';
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = ['grog', 'mead'];

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

new Store_Data('First & Pike', 23, 65, 6.3);
new Store_Data('SeaTac Airport', 3, 24, 1.2);
new Store_Data('Seattle Center', 11, 38, 3.7);
new Store_Data('Capitol Hill', 20, 38, 2.3);
new Store_Data('Alki', 2, 16, 4.6);

Store_Data.prototype.render = function () {
  for (var j = 0; j < allStores.length; j++) {
    var theStores = document.getElementById('Store_List');
    var thElS = document.createElement('Stores');
    thElS.textContent = this.store;
    theStores.appendChild(thElS);
    allStores.push(this.store);

  }

  var theStores2 = document.getElementById('Store_List');
  var v = document.getElementById('Cookies_Purchased_Hourly');
  v.textContent = this.cookiesPurchasedHourly;
  theStores2.appendChild(v);

};

for (var i = 0; i < hoursOpen.length; i++) {
  var hoursList = document.getElementById('Hours_List');
  var thElH = document.createElement('Length');
  thElH.textContent = hoursOpen[i] + ' ';
  hoursList.appendChild(thElH);
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

// Store_Data.prototype.getCookiesPurchasedHourly();
// Store_Data.prototype.getRandCustomersPerHour();
// Store_Data.prototype.render();
