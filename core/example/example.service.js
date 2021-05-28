(() => {
  'use strict';

  angular
    .module('example.core')
    .factory('exampleService', exampleService);

  exampleService.$inject = ['$http'];

  function exampleService($http) {

    const service = {
      getExamples: getExamples
    };

    return service;

    ////////

    function getExamples() {
    }
  }
})();

