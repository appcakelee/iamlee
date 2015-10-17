'use strict';

var controllers = angular.module('iamleeFlickr.controllers', []);

controllers.controller('ImgListCtrl', function ($scope, $http) {

  $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?id=134741853@N08&format=json&jsoncallback=JSON_CALLBACK').then(function (data) {
    $scope.list = data.data;
    console.log(data);


  });

});
/*
https://api.flickr.com/services/feeds/photos_public.gne?id=134741853@N08&format=json&jsoncallback=JSON_CALLBACK
https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=59a53636af91a7bf4d991b263f7b88f9&photoset_id=72157659088761658&extras=url_q%2C+url_z%2Curl_l%2Ctags&format=json&nojsoncallback=1
*/
