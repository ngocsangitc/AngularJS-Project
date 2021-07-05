var  app= angular.module("myApp",[]);
app.controller("myCtrl", ($scope) => {
  $scope.greeting = ["hello","hi"];
});