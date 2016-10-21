
angular
    .module('app',['ui.router'])
    .run(runWork)
    .config(routeConfig);



/*注入服务*/
runWork.$inject = ['$rootScope', '$state', '$stateParams'];
routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];




