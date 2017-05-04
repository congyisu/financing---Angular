/**
 * Created by sky on 2017/3/1.
 */
//bannerÂÖ²¥
angular.module('myApp')
    .directive('mySwipe', function ($timeout) {
        return {
            restrict: 'E',
            template: '<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide" ng-repeat="x in imgArr"><img ng-src="{{x.url}}"></div></div><div class="swiper-pagination point"></div></div>',
            scope: {
                imgArr: '=',
                config: '='
            },
            replace: true,
            controller: function ($scope) {
            },
            link: function (scope, elem, attr) {
                $timeout(function () {
                    new Swiper(elem[0], scope.config);
                }, 0)
            }
        }
    })
    .controller('myBanner', function ($scope) {
        $scope.cfg = {
            autoplay: 1000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        };
        $scope.arr = [
            {url: 'public/img/banner.jpg'},
            {url: 'public/img/banner_2.jpg'},
            {url: 'public/img/banner_3.jpg'},
            {url: 'public/img/banner_4.jpg'},
            {url: 'public/img/banner_5.jpg'}
        ]
    })
    .controller('homeCtrl', function ($rootScope, $scope, $state, $timeout) {
        $timeout(function () {
            new IScroll('.homecont');
        }, 100)
    });
