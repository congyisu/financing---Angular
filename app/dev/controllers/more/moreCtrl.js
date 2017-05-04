/**
 * Created by sky on 2017/3/1.
 */
angular.module('myApp')
    .controller('moreCtrl', function ($rootScope, $scope, $state, $timeout) {
        $timeout(function(){
            new IScroll('.morecont');
        },100)
    });