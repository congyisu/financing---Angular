/**
 * Created by sky on 2017/3/1.
 */
angular.module('myApp')
    .controller('mineCtrl', function ($rootScope, $scope, $state, $timeout) {
        $timeout(function () {
            new IScroll('.minecont');
        }, 100)
    });