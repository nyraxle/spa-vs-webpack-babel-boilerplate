'use strict';

import angular from 'angular';
import app from './app/app.js';

const bootstrap = () => {
  angular.element(document).ready(() => {
    angular.bootstrap(document, [app.name], { });
  });
};

export default bootstrap;
