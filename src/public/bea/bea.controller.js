(function () {
  'use strict';

  angular.module('public')
  .controller('BEAController', BEAController);

  BEAController.$inject = []

  function BEAController() {
    var beaCtrl = this;
    beaCtrl.price = null;
    beaCtrl.average_variable_cost = null;
    beaCtrl.price_tc = null;
    beaCtrl.average_variable_cost_tc = null;
    beaCtrl.quantity_tc = null;
    beaCtrl.total_revenue_gp = null;
    beaCtrl.total_variable_cost_gp = null;
    beaCtrl.total_fixed_cost_beq = null;
    beaCtrl.price_beq = null;
    beaCtrl.average_variable_cost_beq = null;
    beaCtrl.level_of_demand_mos = null;
    beaCtrl.beq_mos = null;
  }
})();
