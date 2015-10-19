'use strict';

var controllers = angular.module('iamleeFlickr.controllers', []);

controllers.controller('ImgListCtrl', function ($scope, $http) {

  $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?id=134741853@N08&format=json&jsoncallback=JSON_CALLBACK').then(function (data) {
    $scope.list = data.data;
  });

});
