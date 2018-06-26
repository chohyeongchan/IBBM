(function () {
  'use strcit';

  angular.module('public')
  .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html'
      })
      .state('public.cr', {
        url: '/cr',
        templateUrl: 'src/public/cr/cr.html',
        controller: 'CRController as crCtrl'
        // controllerAs: 'crCtrl'
      })
      .state('public.bea', {
        url: '/bea',
        templateUrl: 'src/public/bea/bea.html',
        controller: 'BEAController as beaCtrl'
      })
      .state('public.fa', {
        url: '/fa',
        templateUrl: 'src/public/fa/fa.html',
        controller: 'FAController as faCtrl'
      })
      .state('public.PaR', {
        url: '/PaR',
        templateUrl: 'src/public/PaR/PaR.html',
        controller: 'PaRController as PaRCtrl'
      });
  }
})();
