(function () {
  'use strict'

  // Calculator module that includes the public module as a dependency

  angular.module('calculator', ['public'])
  .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    // if user goes to an unknown path, redirect to public root
    $urlRouterProvider.otherwise('/cr');
  }

})();
