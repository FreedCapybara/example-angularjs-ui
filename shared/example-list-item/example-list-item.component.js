(() => {
  'use strict';

  const component = {
    templateUrl: './example-list-item.component.html',
    controller: ExampleListItemController
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

