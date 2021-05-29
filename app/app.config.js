(() => {
  'use strict';

  const apiBaseUrl = 'https://localhost:44393';

  angular
    .module('app')
    .constant('apiBaseUrl', apiBaseUrl);

})();

