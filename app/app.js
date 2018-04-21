'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.done',
    'myApp.tobeDone',
    'myApp.version',
    'homeDetail'

]).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home',{
            template: '<home></home>'
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    }]);
