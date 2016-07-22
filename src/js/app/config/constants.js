'use strict';

// Apí name on IIS
const apiName = 'Api-Location';
const apiUrl = location.protocol.concat('//').concat(location.hostname).concat('/').concat(apiName).concat('/api');

const loadConstants = (appModule) => {
  appModule.constant('apiUrl', apiUrl);
};

export default {
  load: loadConstants
};
