(() => {
  'use strict';

  angular
    .module('page2')
    .controller('Page2Controller', Page2Controller);

  Page2Controller.$inject = ['$location', 'exampleService'];

  function Page2Controller($location, exampleService) {
    const vm = this;

    vm.example = {};

    vm.submit = submit;

    init();

    ////////

    function init() {
    }

    function submit() {
      exampleService.saveExample(vm.example)
        .then(() => {
          $location.path('/');
        });
    }
  }
})();

