(function () {
  'use strict';

  angular.module('public')
  .controller('FAController', FAController);

  function FAController() {
    var faCtrl = this;
    faCtrl.opening_stock = null;
    faCtrl.value_of_purchases = null;
    faCtrl.closing_stock = null;
  }
})();
