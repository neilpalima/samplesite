'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var date = new Date();
angular.module('myApp.services', []).
  value('version', date.getFullYear());
