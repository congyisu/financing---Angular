/**
 * Created by sky on 2017/3/1.
 */
angular.module('myApp')
    .controller('myContainer', function ($scope, $http, $state, $rootScope) {
        //Tab切换理财产品
        var swiper = new Swiper('.content', {
            onSlideChangeStart: function (str) {
                var num = str.activeIndex;
                $(".product_tab").find("a").eq(num).addClass("bg").siblings().removeClass("bg");
            }
        });
        $(".product_tab a").click(function () {
            var index = $(this).index();
            swiper.slideTo(index, 300);
            $(this).addClass('bg').siblings().removeClass('bg');
        });

        //遮罩层数据
        $scope.arr1 = ['全部', '押车宝', '流水宝', '黄金宝', '体验宝'];
        $scope.arr2 = ['全部', '股票', '债券', '混合', '指数'];
        //点击不同产品遮罩层内容显示不同
        $scope.flags = false;
        $rootScope.masktoggle = function () {
            $scope.flags = !$scope.flags;
            if ($(".product_tab a").eq(0).hasClass('bg')) {
                $('.masklist1').show();
                $('.masklist2').hide();
            } else {
                $('.masklist2').show();
                $('.masklist1').hide();
            }
        };
        //点击遮罩层关闭
        $scope.exit = function () {
            $scope.flags = false;
        };

        //债权产品筛选
        $(".uls1").on('click', 'li', function () {
            $(this).addClass('cirbg').siblings().removeClass('cirbg');
            console.log($.trim($(this).text()).length)
            if ($.trim($(this).text()) == '全部') {
                //console.log($(this).text())
                //alert('11')
                $scope._filt = "";
            } else if ($.trim($(this).text()) == '押车宝' || $.trim($(this).text()) == '流水宝' || $.trim($(this).text()) == '黄金宝' || $.trim($(this).text()) == '体验宝') {
                $scope._filt = $.trim($(this).text());
            }
        });
        //优选基金筛选
        $(".uls2").on('click', 'li', function () {
            $(this).addClass('cirbg').siblings().removeClass('cirbg');
            console.log($.trim($(this).text()).length);
            if ($.trim($(this).text()) == '全部') {
                //console.log($(this).text())
                //alert('11')
                $scope._filter = "";
            } else if ($.trim($(this).text()) == '股票' || $.trim($(this).text()) == '债权' || $.trim($(this).text()) == '混合' || $.trim($(this).text()) == '指数') {
                $scope._filter = $.trim($(this).text());
            }
        });


    })

    .controller('productCtrl', function ($timeout) {
        $timeout(function () {
            new IScroll('.productcont');
        }, 100)
    });



