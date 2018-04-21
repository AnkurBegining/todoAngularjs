'use strict';

angular.module('myApp.tobeDone', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tobeDone', {
    templateUrl: 'tobeDone/tobeDone.html',
    controller: 'tobeDoneCtrl'
  });
}])

.controller('tobeDoneCtrl', [function() {

}]);