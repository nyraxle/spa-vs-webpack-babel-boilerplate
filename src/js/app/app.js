'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';

// Non-domain components
const util = angular.module('util', []);

// Domain components
const app = angular.module('app', [uirouter, 'util']);

const modules = {
  app: app,
  util: util
};

//  Load SPA compontents (directives, services, injectors, etc)
import components from './config/components.js';
components.load(modules);

// Load SPA constants
import constants from './config/constants.js';
constants.load(app);

// Load SPA routes
import states from './config/states.js';
states.load(app);

// Load SPA Configurations
import config from './config/config.js';
config.load(app);

export default app;
