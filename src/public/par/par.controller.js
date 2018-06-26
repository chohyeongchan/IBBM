(function () {
  'use strict';

  angular.module('public')
  .controller('PARController', PARController);

  function PARController() {
    var parCtrl = this;
    parCtrl.gross_profit_gpm = null;
    parCtrl.sales_revenue = null;

  }
})();
