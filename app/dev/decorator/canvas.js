/**
 * Created by sky on 2017/3/3.
 */
angular.module('myApp')
    .directive('myCanvas', function ($timeout) {
        return {
            restrict: 'E',
            template: '<canvas id="canvas" width="60" height="60"></canvas>',
            replace: true,
            scope: {
                cvs: "="
            },
            controller: function ($scope) {},
            link: function (scope, ele, attr) {
                var cvs = ele[0];
                var api = cvs.getContext('2d');
                api.beginPath();
                api.fillStyle = '#ed5858';
                api.arc(30, 30, 23, 0, Math.PI * 2);
                api.closePath();
                api.fill();
                api.beginPath();
                api.strokeStyle = '#F0E81F';
                api.lineWidth = '4';
                api.arc(30, 30, 25, -Math.PI / 2, Math.PI * 2 * parseInt(scope.cvs.tenderSchedule) / 100 - Math.PI / 2);
                api.stroke();
            }
        }
    });