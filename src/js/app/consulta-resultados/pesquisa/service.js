'use strict';

function PesquisaResultadosService($log, $http, $q, apiUrl) {
  this.buscarFichas = function (filtro) {
    const deferred = $q.defer();
    const methodUrl = apiUrl.concat('/Ficha');

    $http.get(methodUrl, {
      params: filtro
    })
    .then((result) => {
      deferred.resolve(result.data);
    })
    .catch((error) => {
      $log.error('PesquisaResultadosService', error);
    });

    return deferred.promise;
  };
}

PesquisaResultadosService.$inject = ['$log', '$http', '$q', 'apiUrl'];

export default (module) => {
  module.service('PesquisaResultadosService', PesquisaResultadosService);
};
