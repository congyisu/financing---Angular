/**
 * Created by sky on 2017/3/1.
 */
//≈‰÷√¬∑”…
angular.module('myApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: './controllers/home/home.html',
                controller: 'homeCtrl'
            })
            .state('product',{
                url: '/product',
                templateUrl: './controllers/product/product.html',
                controller: 'productCtrl'
            })
            .state('mine',{
                url: '/mine',
                templateUrl: './controllers/mine/mine.html',
                controller: 'mineCtrl'
            })
            .state('more',{
                url: '/more',
                templateUrl: './controllers/more/more.html',
                controller: 'moreCtrl'
            })
    })