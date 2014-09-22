(function(){
"use strict";
 
  // some custom service or factory
 function SomeService(){
   var api = {};
     api.dataMessage = 'test 123 service data'; 
   return api;
 }


  /*@ngInject*/
 function myController($scope, SomeService) {
    $scope.message = SomeService.dataMessage;
 }

 angular.module('app',[])
   .service('SomeService', SomeService) // define our service
   .controller("annCtrl", myController)  // define our controller

})();

