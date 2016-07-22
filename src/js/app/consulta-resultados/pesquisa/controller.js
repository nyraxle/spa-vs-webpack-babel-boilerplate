'use strict';

function pesquisaResultadosController($scope, $log, pesquisaResultadosService) {
  const _self = this;

  _self.buscarFichas = (filtro) => {
    pesquisaResultadosService.buscarFichas(filtro)
      .then((fichas) => {
        _self.fichas = fichas;
      });
  };

  const init = function () {
    $log.debug('Pesquisa Controller');
    _self.name = 'Pesquisa Controller';

    _self.fichas = [];

    _self.filtro = {
      ficha: null
    };
  };

  init();
}

pesquisaResultadosController.$inject = ['$scope', '$log', 'PesquisaResultadosService'];

export default (module) => {
  module.controller('pesquisaResultadosController', pesquisaResultadosController);
};
