
export const heroAppModule = angular.module('heroApp', [
    'ui.router'
]).config(['$stateProvider', function ($stateProvider) {
    var state = {
        name: 'angularjs',
        url: '/',
        template: '<flag-list></flag-list>'
    };
    $stateProvider.state(state);
}]);

require('./list/flag-list');


