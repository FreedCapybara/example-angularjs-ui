(() => {
  'use strict';

  const component = {
    templateUrl: 'src/shared/example-list-item/example-list-item.component.html',
    controller: ExampleListItemController,
    controllerAs: 'vm',
    bindings: {
      example: '='
    }
  };

  angular
    .module('example-list-item')
    .component('exampleListItem', component);

  ExampleListItemController.$inject = [];

  function ExampleListItemController() {
    const vm = this;

    init();

    ////////

    function init() {
    }
  }
})();

