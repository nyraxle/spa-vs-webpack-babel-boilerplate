'use strict';
// Attach components on modules and start angular states

import pesquisaResultadosController from '../consulta-resultados/pesquisa/controller.js';
import pesquisaResultadosService from '../consulta-resultados/pesquisa/service.js';
import fichasResultadosController from '../consulta-resultados/fichas/controller.js';

const loadApp = (app) => {
  pesquisaResultadosService(app);
  pesquisaResultadosController(app);
  fichasResultadosController(app);
};

import authorizationInterceptor from './interceptors/authorization.js';
const loadUtil = (util) => {
  authorizationInterceptor(util);
};

const loadComponents = (modules) => {
  loadApp(modules.app);
  loadUtil(modules.util);
};

export default {
  load: loadComponents
};
