/*run*/
function runWork($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}


/*路由配置config*/
function routeConfig($stateProvider, $urlRouterProvider){
    /*默认路由*/
    $urlRouterProvider.otherwise('/wrap');
    $stateProvider
        .state('wrap',{
            url : "/wrap",
            views : {
                'main' : {
                    templateUrl : "tpls/wrap.html",
                    controller : 'wrapController',
                    controllerAs :　"vm"
                },
                'common@wrap' : {
                    templateUrl : "tpls/common.html",
                    controller : "commonController",
                    controllerAs : "vm"
                },
                'index@wrap' : {
                    templateUrl : "tpls/index.html",
                    controller : "indexController",
                    controllerAs : "vm"
                }

            }
        })
}
