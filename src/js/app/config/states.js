'use strict';

// State loader
const loadStates = (appModule) => {
  appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider
      .otherwise('/consulta-resultados/fichas')
      .when('/consulta-resultados', '/consulta-resultados/fichas');

    $stateProvider
      .state('consultaResultados', {
        abstract: true,
        url: '/consulta-resultados',
        template: require('../consulta-resultados/index.html')
      })
      .state('consultaResultados.pesquisa', {
        url: '/pesquisa',
        template: require('../consulta-resultados/pesquisa/index.html'),
        controller: 'pesquisaResultadosController',
        controllerAs: 'PesquisaResultados'
      })
      .state('consultaResultados.fichas', {
        url: '/fichas',
        template: require('../consulta-resultados/fichas/index.html'),
        controller: 'fichasResultadosController',
        controllerAs: 'FichasResultados'
      });
  }]);
};

export default {
  load: loadStates
};
