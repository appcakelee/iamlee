'use strict';

var filters = angular.module('iamleeFlickr.filters', []);

filters.filter('split', function() {
  return function (value) {
    //  console.log(value);
        var str = value;
        var res = str.split("m.jpg");
        return (res.join("b.jpg"));

  }
})
