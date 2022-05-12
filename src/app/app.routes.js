(() => {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'src/app/page1/page1.html',
      controller: 'Page1Controller',
      controllerAs: 'vm'
    });

    $routeProvider.when('/page2', {
      templateUrl: 'src/app/page2/page2.html',
      controller: 'Page2Controller',
      controllerAs: 'vm'
    });

    $routeProvider.otherwise('/');
  }

})();

