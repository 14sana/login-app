angular.
  module('mainApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<my-login></my-login>'
        }).

        otherwise('/welcome');
    }
  ]);