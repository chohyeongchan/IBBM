(function () {
  'use strict';

  angular.module('public')
  .controller('BEAController', BEAController);

  BEAController.$inject = []

  function BEAController() {
    var beaCtrl = this;
    beaCtrl.price = null;
    beaCtrl.average_variable_cost = null;
  }
})();
