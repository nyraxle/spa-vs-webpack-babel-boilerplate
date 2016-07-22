'use strict';

const loadConfig = (app) => {
  // SPA configurations
  const appConfig = ($httpProvider) => {
    // Disable debug for angular 1.2
    //http://stackoverflow.com/questions/27783269/debuginfoenabled-for-angular-1-2

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('AuthorizationInterceptor');
  };

  appConfig.$inject = ['$httpProvider'];

  app.config(appConfig);
};

export default {
  load: loadConfig
};
