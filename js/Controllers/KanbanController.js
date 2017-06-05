// JavaScript Document

angular.module('myApp').controller('KanbanController', function KanbanController($scope, kanbanManipulator){
'use strict';
	
	$scope.addNewCard= function(column){
		$scope.$broadcast('AddNewCard', column);
		
	};
	
	//deleting the card
	$scope.delete = function(card, column){
		if(confirm('You sure?')){
			kanbanManipulator.removeCardFromColumn($scope.kanban, column, card);
		}
	};
	
	//opening the card
	$scope.openCardDetails = function(card){
		$scope.$broadcast('OpenCardDetails', card);
	};
	
	$scope.detailsFor = function(card){
		if(card.details !== undefined && card.details !== ''){
			return card.details;
		}
		return card.name;
	};
	
	
});