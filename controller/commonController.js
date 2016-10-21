
(function(){
    'use strict';
    angular
        .module('app')
        .controller('commonController',commonController);
        commonController.$inject = ['$state','$rootScope','$http'];
})();

function commonController($state, $rootScope, $http){

}