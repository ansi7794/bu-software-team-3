// JavaScript Document

var app = angular.module('myApp', []);

app.controller('ApplcationController', function($scope, kanbanRepository, $location){
	'use strict';
	
	$scope.colorOptions = ['FFFFFF','DBDBDB','FFB5B5', 'FF9E9E', 'FCC7FC', 'FC9AFB', 'CCD0FC', '989FFA', 'CFFAFC', '9EFAFF', '94D6FF','C1F7C2', 'A2FCA3', 'FAFCD2', 'FAFFA1', 'FCE4D4', 'FCC19D'];

	$scope.$on('NewKanbanAdded', function(){
		$scope.showNewKanban = false;
		$scope.kanban = kanbanRepository.getLastUsed();
		$scope.allKanbans = Object.keys(kanbanRepository.all());
		$scope.selectedToOpen = $scope.kanban.name;
		$location.path('/kanban/' + $scope.kanban.name);
		$scope.switchToList = $scope.allKanbans.slice(0);
		$scope.switchToList.splice(0,0,'Switch to ...');
	});
});