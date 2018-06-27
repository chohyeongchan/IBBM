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
      .state('public.par', {
        url: '/par',
        templateUrl: 'src/public/par/par.html',
        controller: 'PARController as parCtrl'
      })
      .state('public.era', {
        url: '/era',
        templateUrl: 'src/public/era/era.html',
        controller: 'ERAController as eraCtrl'
      })
      .state('public.cf', {
        url: '/cf',
        templateUrl: 'src/public/cf/cf.html',
        controller: 'CFController as cfCtrl'
      })
      .state('public.ia', {
        url: '/ia',
        templateUrl: 'src/public/ia/ia.html',
        controller: 'IAController as iaCtrl'
      })
      .state('public.b', {
        url: '/b',
        templateUrl: 'src/public/b/b.html',
        controller: 'BController as bCtrl'
      });
  }
})();
