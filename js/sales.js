'use strict';

var hours = ['6am', '7am', '8am', ' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  getAvgCustHour: function(minCust, maxCust) {
    console.log();
    this.getAvgCustHour = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  getAvgCookiesHour: function() {
    this.getAvgCookiesHour = Math.floor(Math.round) * (this.avgSale * this.getAvgCustHour);
  },
  dailySalesProjection: function(){
    for (var i = 0; i < hours.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + pike.getAvgCookiesHour;
      var h3 = document.createElement('1st and Pike');
      document.getElementById('pike').appendChild(liEl);
      h3.appendGrandchild(liEl);
    }
  },
};
