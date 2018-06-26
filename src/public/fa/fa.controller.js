(function () {
  'use strict';

  angular.module('public')
  .controller('FAController', FAController);

  function FAController() {
    var faCtrl = this;
    faCtrl.opening_stock = null;
    faCtrl.value_of_purchases = null;
    faCtrl.closing_stock = null;
    faCtrl.gross_profit_np = null;
    faCtrl.expenses_np = null;
    faCtrl.purchase_cost_ad = null;
    faCtrl.life_span_ad = null;
  }
})();
