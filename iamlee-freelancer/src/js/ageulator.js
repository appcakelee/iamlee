
   'use strict';
   // this function is strict...

   var calculateDate = function () {

     // take idate input and count days since date to prosent.
     var dateOb = new Date(),
         sourceDate = $("#datepicker").datepicker(),
         inputDate = new Date(sourceDate.val()),
         fInputDate = $.datepicker.formatDate("dd-mm-yy", inputDate),
         fInputDay = $.datepicker.formatDate("dd", inputDate),
         fInputMonth = $.datepicker.formatDate("mm", inputDate),
         fInputYear = $.datepicker.formatDate("yy", inputDate),
         fTodayFull = $.datepicker.formatDate("dd-mm-yy", dateOb),
         fTodayDay = $.datepicker.formatDate("dd", dateOb),
         fTodayMonth = $.datepicker.formatDate("mm", dateOb),
         fTodayYear = $.datepicker.formatDate("yy", dateOb),
         daysInYear = 365,
         totalLeaps = 0,
         daysInMonth = [],
         inputYearDays = 0,
         currentYearDays = 0,
         dayCount = 0,
         yearDayCount = 0;

     function CountLeaps(thisYear, inputYear, thisMonth, inputMonth, thisDay, inputDay) {
         var y = thisYear,
             iy = inputYear,
             m = thisMonth,
             im = inputMonth,
             d = thisDay,
             id = inputDay,
             yearDayCount = 0;

         while(y >= iy) {
           // calc leap years
           var mod4 = y % 4,
               mod100 = y % 100,
               mod400 = y % 400;

           if(mod4 === 0 || mod400 === 0 && mod100 === 0) {
             //if a year is divsible by 4 and divisible by 400 and 100
             totalLeaps++;
           }
           y--;
         }

         return totalLeaps;

     }

     new CountLeaps(fTodayYear, fInputYear, fTodayMonth, fInputMonth, fTodayDay, fInputDay);

     //take input year and current year - 2 * result by 365 + number of leap days ,
     //take input year calculate days in year passed and add to current year days passed + to initial calculation.

     var fullYears = (fTodayYear - fInputYear) - 1,
         fullYearsDays = (fullYears * 365) + totalLeaps;

     function DaysInYear(year, month, day, inPast) {

       var y = year,
           m = month - 1,
           d = day,
           isLeap = false,
           dayCount = 0;

       var mod4 = y % 4,
           mod100 = y % 100,
           mod400 = y % 400;

       if(mod4 === 0 || mod400 === 0 && mod100 === 0) {
         //if a year is divsible by 4 and divisible by 400 and 100
         isLeap = true;
       }

       var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

       if(isLeap) {
         daysInMonth[1] = 29;
       }

       if(inPast) {
         var pastMonth = 12 - m;
         //console.log("the inpast month is " + pastMonth + " the input is 4 so this should now be 8");
       }

       if(inPast) {
         for (var i = m; i <= 11; i++) {
             dayCount += daysInMonth[i];
         }
         dayCount -= d;
         inputYearDays = dayCount;
       }
       else {
         for (var i = 0; i <= m -1; i++) {
           dayCount += daysInMonth[i];
       }

       //console.log("The number of days in the current year is "+ dayCount);
       dayCount += parseInt(d);

       currentYearDays = dayCount;
       }
     }

     new DaysInYear(fInputYear, fInputMonth, fInputDay, true);
     new DaysInYear(fTodayYear, fTodayMonth, fTodayDay, false);

     var fullDayCalc = fullYearsDays + inputYearDays + currentYearDays;

     // comapare 2 years input and current
     var yearCalc = fTodayYear - fInputYear,
         dayCalc = fullDayCalc,
         monthInInputYear = 12 - parseInt(fInputMonth),
         extraMonths = parseInt(fTodayMonth) + monthInInputYear,
         monthCalc = (yearCalc - 1) * 12,
         allMonths = monthCalc + extraMonths,
         weekCalc = parseInt(dayCalc / 7),
         remainingMonths = fTodayMonth - fInputMonth,
         remainingDays = fTodayDay - fInputDay;
         //hourCalc = dayCalc * 24,
         //minCalc = hourCalc * 60,
         //secondCalc = minCalc * 60;

     console.log("You are " + yearCalc + " years, " + remainingMonths + " months and " + remainingDays + " days old");
     console.log("Months " + allMonths);
     console.log("Weeks " + weekCalc);
     console.log("You have been here for " + dayCalc + " days! in that time there have been " + totalLeaps + " leap years");
     //console.log("Hours " + hourCalc); // not accurate
     //console.log("Minutes " + minCalc); // not accurate
     //console.log("Seconds " + secondCalc); // not accurate

     document.getElementById('theResult').innerHTML = "<h1>You are " + yearCalc + " years, " + remainingMonths + " months and " + remainingDays + " days old</h1>";
     document.getElementById('theResult').innerHTML += "<h2>You are " + allMonths + " months old!</h2>";
     document.getElementById('theResult').innerHTML += "<h2>You are " + weekCalc + " weeks old!</h2>";
     document.getElementById('theResult').innerHTML += "<h2>You are " + dayCalc + " days old!</h2>";
  }
