angular.
  module('mainApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<my-login></my-login>'
        }).
        when('/adduser', {
          template: '<add-user></add-user>'
        }).
        when('/profile/:result', {
          template: '<my-profile></my-profile>'
        }).
        otherwise('/welcome');
    }
  ]);