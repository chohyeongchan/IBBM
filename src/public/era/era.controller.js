(function () {
  'use strict';

  angular.module('public')
  .controller('ERAController', ERAController);

  function ERAController() {
    var eraCtrl = this;
    eraCtrl.cogs_st = null;
    eraCtrl.avst_st = null;

  }
})();
