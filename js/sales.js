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

},

Store_Data.prototype.getCookiesPurchasedHourly = function () {
  this.cookiesPurchasedHourly = Math.ceil(Math.random() * (this.avgCookiesPerSale * this.randCustomersPerHour));

};

new Store_Data('First & Pike', 23, 65, 6.3);
new Store_Data('SeaTac Airport', 3, 24, 1.2);
new Store_Data('Seattle Center', 11, 38, 3.7);
new Store_Data('Capitol Hill', 20, 38, 2.3);
new Store_Data('Alki', 2, 16, 4.6);

Store_Data.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hoursOpen.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieArray[i];
    trEl.appendChild(tdEl);

  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

};

Store_Data.prototype.totalCookies = function(){
  this.totalCookies = this.cookiesPurchasedHourly + this.totalCookies;
  // if (i===hoursOpen.length -1){
  // liEl = document.createElement('li');
  // liEl.textContent = `Total: ${totalCookies} cookies`;
  // firstPikeuL.appendChild(liEl);
};


// // storeName.getCookiesPurchasedHourly();
// // storeName.getRandCustomersPerHour();

// // firstPike.render()
