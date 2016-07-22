'use strict';

const fichasResultadosController = ($log) => {
  $log.debug('fichasResultadosController');
};

fichasResultadosController.$inject = ['$log'];

export default (module) => {
  module.controller('fichasResultadosController', fichasResultadosController);
};
