(function () {
  'use strict';

  angular.module('public')
  .controller('CRController', CRController);

  CRController.$inject = []

  function CRController() {
    var crCtrl = this;
    crCtrl.price = null;
    crCtrl.quality = null;
    crCtrl.total_revenue = null;
    crCtrl.tr_quality = null;
  }
})();
