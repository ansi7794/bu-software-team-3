// JavaScript Document

var app = angular.module('myApp', []);

app.controller('controller', function($scope){
$scope.colCount = 3;

	$scope.increment = function(dir){
		(dir == 'up') ? $scope.colCount++: $scope.colCount--;

	}
	

  $scope.cols = ["Backlog", "In Progress", "Completed"];// array of column names
  $scope.data = ["Testing"];// row data arrays

});