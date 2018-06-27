(function () {
  'use strict';

  angular.module('public')
  .controller('CFController', CFController);

  function CFController() {
    var cfCtrl = this;
    cfCtrl.opening_stock = null;

  }
})();
