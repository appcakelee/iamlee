"use strict";

var callDate = document.getElementById("getDate");

callDate.addEventListener("click", function() {

  var userInputDay      = document.getElementById("day").selectedIndex ? document.getElementById("day").selectedIndex + 1 : 1,
      userInputMonth    = document.getElementById("month").selectedIndex ? document.getElementById("month").selectedIndex + 1 : 1,
      userInputYear     = document.getElementById("year").value ? document.getElementById("year").value : -1,
      currentYear       = new Date().getFullYear();

  if(userInputYear === -1 || isNaN(userInputYear)) {
    document.getElementById("theResult").innerHTML = "<h1>Please enter a year</h1>";
  }
  else if(userInputYear > currentYear) {
    document.getElementById("theResult").innerHTML = "<h1>Hold on future child! Enter a date in the past!</h1>";
  }
  else if (userInputYear <= 99 && userInputYear !== -1 && !isNaN(userInputYear)) {
    document.getElementById("theResult").innerHTML = "<h1>Try another date, my records don't go back that far</h1>";
  } else {
      calculateDate(userInputDay, userInputMonth, userInputYear);
  }
}, false);


for(var i = 1; i <= 31; i++){
  document.getElementById("day").innerHTML  += '<option value="'+i+'">'+i+'</option>';
}
// automatically fill month drop down with correct day count
document.getElementById("month").onchange = function() {
  document.getElementById("day").innerHTML = '';

  var daysInMonth = null;
  var chosenMonth = document.getElementById("month").selectedIndex;

  if (chosenMonth === 1) {
    daysInMonth = 28;

  } else if (chosenMonth === 3 || chosenMonth === 5 || chosenMonth === 8 || chosenMonth === 10){
    daysInMonth = 30;
  }
  else {
    daysInMonth = 31;
  }

  for(var i = 1; i <= daysInMonth; i++){
    document.getElementById("day").innerHTML  += '<option value="'+i+'">'+i+'</option>';
  }

};

var calculateDate = function (userInputDay, userInputMonth, userInputYear) {

 //Set the two dates
  var fInputDay     = userInputDay,
      fInputMonth   = userInputMonth,
      fInputYear    = userInputYear,
      inputDate     = new Date(fInputYear, fInputMonth -1, fInputDay), //Month is 0-11 in JavaScript
      today         = new Date(),
      diff          = new Date(today - inputDate),
      days          = diff / 1000 / 60 / 60 / 24, //Get 1 day in milliseconds
      hours         = days * 24,
      mins          = hours * 60,
      seconds       = mins * 60,
      weeks         = days / 7,
      daysRweeks    = days % 7,
      years         = days / 365,
      months        = years * 12,
      monthsRyear   = months % 12,
      timeInfo      = '';

  timeInfo += "You or whatever you're ageing is <span>" + parseInt(days) + "</span> days old, ";
  timeInfo += "which is <span>" + parseInt(hours) + "</span> hours or <span>";
  timeInfo += parseInt(mins) + "</span> minutes or <span>";
  timeInfo += parseInt(seconds) + "</span> seconds! ";
  timeInfo += "It works out as <span>" + parseInt(weeks) + "</span> weeks and <span>" + parseInt(daysRweeks) + "</span> days or <span>";
  timeInfo += parseInt(months) + "</span> months, or putting it another way <span>";
  timeInfo += parseInt(years) + "</span> years and <span>" + parseInt(monthsRyear) + "</span> months old! </br>";

  //Calculate difference btw the two dates, and convert to days
  document.getElementById("theResult").innerHTML = timeInfo;

};
