(() => {
  'use strict';

  angular
    .module('example.core')
    .factory('exampleService', exampleService);

  exampleService.$inject = ['$http', 'apiBaseUrl'];

  function exampleService($http, apiBaseUrl) {

    const service = {
      getExamples: getExamples
    };

    return service;

    ////////

    function getExamples() {
      return $http.get(`${apiBaseUrl}/example`);
    }
  }
})();

