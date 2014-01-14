'use strict';


// Declare app level module which depends on filters, and services
angular.module('tyApp', [
  'ngRoute',
  'tyApp.filters',
  'tyApp.services',
  'tyApp.directives',
  'tyApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'MyCtrl1'});
}]);
