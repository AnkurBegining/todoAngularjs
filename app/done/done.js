'use strict';

angular.module('myApp.done', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/done', {
    templateUrl: 'done/done.html',
    controller: 'doneCtrl'
  });
}])

.controller('doneCtrl', [function() {

}]);