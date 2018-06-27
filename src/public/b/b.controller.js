(function () {
  'use strict';

  angular.module('public')
  .controller('BController', BController);

  function BController() {
    var bCtrl = this;
    bCtrl.ao_v = null;
    bCtrl.bd_v = null;

  }
})();
