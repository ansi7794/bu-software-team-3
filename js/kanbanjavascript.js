// JavaScript Document

$(function() {
	'use strict';

	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		var i = 0;
		for (i = 0; i < 10; i++) {
			// console.log(chars[Math.floor(Math.random() * chars.length)]);
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	function createColumn(self) {
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnList = $('<ul>').addClass('columnt-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('X');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add Card');

			$columnDelete.on('click', function(){
				self.deleteColumn();
			});

			$columnAddCard.on('click', function(){
				self.addCard(new Card(prompt("Please enter your task.")));
			});

			$column.append($columnTitle)
					.append($columnList)
					.append($columnAddCard)
					.append($columnDelete);

			return $column;
		}

	function Column(name) {
		var self = this;
		this.id = randomString();
		this.name = name;
		this.$element = createColumn(self);
	}

	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element);
		},
		deleteColumn: function() {
			this.$element.remove();
		}
	};

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('X');
			$cardDelete.on('click', function(){
				self.removeCard();
			});

			$card.append($cardDescription).append($cardDelete);
			return $card;
		}
	}

	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	};
	
	var board = {
		name : 'Yablica Kanban',
		addColumn: function(column) {
			this.element.append(column.$element);
			initSortable();
		},
		element: $('#board .column-container')
	};

	function initSortable() {
		$('.columnt-card-list').sortable({
			connectWith: '.columnt-card-list',
			forcePlaceholderSize: true,
      		placeholder: 'card-placeholder',
      		dropOnEmpty: true
    	}).disableSelection();
  	}

  	$('.create-column').on('click', function(){
  		var name = prompt("Enter a column name");
  		var column = new Column(name);
  		board.addColumn(column);
  	});

  	var todoColumn = new Column('To Do');
	var doingColumn = new Column('Doing');
	var doneColumn = new Column('Done');


	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	var card1 = new Card('Add a chatroom');
	var card2 = new Card('Make iFrames');
	var card3 = new Card('Kanban Task Board');
	var card4 = new Card("Finished templates");
	var card5 = new Card('Drop down to switch kanban boards');
	var card6 = new Card('Function to input Cloud key to import and export Kanban boards');
	var card7 = new Card('Script to spin up EC2 Instances');
	var card8 = new Card('Click on tasks to get more info');
	
	todoColumn.addCard(card1);
	todoColumn.addCard(card5);
	todoColumn.addCard(card6);
	todoColumn.addCard(card7);
	doingColumn.addCard(card2);
	doingColumn.addCard(card3);
	doingColumn.addCard(card8);
	doneColumn.addCard(card4);

});