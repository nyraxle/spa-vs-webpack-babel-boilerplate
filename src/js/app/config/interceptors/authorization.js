'use strict';

import sessionToken from '../storage/sessionToken';

const authorizationInterceptor = () => {
  return {
    request: (config) => {
      const authorizationPrefix = 'Bearer ';
      config.headers['Authorization'] = authorizationPrefix.concat(sessionToken.get());
      return config;
    }
  };
};

export default (module) => {
  module.factory('AuthorizationInterceptor', authorizationInterceptor);
};
