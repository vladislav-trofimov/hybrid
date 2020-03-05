declare var angular: angular.IAngularStatic;
declare var require: any;

(function () {
    'use strict';
    angular.module('heroApp').component('heroList', {
        template: require('html-loader!./flag-list.html'),
        controller: FlagController,
        controllerAs: 'fc',

    });

    FlagController.$inject = ['$scope', '$element', '$attrs', '$http'];

    function FlagController($scope, $element, $attrs, $http) {
        var fc = this;
        fc.changeType = changeType;
        fc.toggle = toggle;
        fc.style={"display":"none"};
        $scope.type = true;
        $scope.show = false;


        $http.get('https://restcountries.eu/rest/v2/all').then(function(resp){
            fc.source = resp.data.map( item => {
                return {
                    name: item.name,
                    code: item.alpha2Code,
                    src: `https://www.countryflags.io/${(item.alpha2Code).toLowerCase()}/flat/64.png`
                }
            });
            fc.list = [...fc.source];
        });

        function changeType() {
            $scope.type = !$scope.type;
        }

        function toggle() {
            $scope.show = !$scope.show;
            if ($scope.show) {
                fc.style={"display":"block"}
            } else {
                fc.style={"display":"none"}
            }

        }

    }
})();

