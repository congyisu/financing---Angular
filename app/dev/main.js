/**
 * Created by sky on 2017/3/1.
 */
angular.module('myApp',['ui.router'])
    .controller('myController', function ($scope ,$http ) {
        $http.get('../../data/data.json')
            .success(function (data) {
                $scope.datalist = data;
            });
    });