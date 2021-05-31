(() => {
  'use strict';

  angular
    .module('example.core')
    .factory('exampleService', exampleService);

  exampleService.$inject = ['$http', 'apiBaseUrl'];

  function exampleService($http, apiBaseUrl) {

    const service = {
      getExamples: getExamples,
      saveExample: saveExample
    };

    return service;

    ////////

    function getExamples() {
      return $http.get(`${apiBaseUrl}/example`);
    }

    function saveExample(example) {
      return $http.post(example.id ? `${apiBaseUrl}/example/${example.id}` : `${apiBaseUrl}/example`, example);
    }
  }
})();

