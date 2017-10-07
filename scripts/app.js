"use strict";

angular
  .module('lojaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'toastr',
    'ngStorage',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $stateProvider, toastrConfig) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/home'
      });

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });
  });