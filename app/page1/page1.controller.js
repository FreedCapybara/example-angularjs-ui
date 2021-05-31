(() => {
  'use strict';

  angular
    .module('page1')
    .controller('Page1Controller', Page1Controller);

  Page1Controller.$inject = ['exampleService'];

  function Page1Controller(exampleService) {
    const vm = this;

    vm.examples = [];

    vm.getExamples = getExamples;

    init();

    ////////

    function init() {
      vm.getExamples();
    }

    function getExamples() {
      exampleService.getExamples()
        .then((response) => {
          vm.examples = response.data;
        });
    }
  }
})();

