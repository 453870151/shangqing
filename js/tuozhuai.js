(function (){
	var console = window.console;
	if( !console.log ){
		console.log = function (){
			alert([].join.apply(arguments, ' '));
		};
	}

	Sortable.create(kanban_bar, {
		group: "kanban",
		animation: 150,
	});

	Sortable.create(bar, {
		group: "words",
		animation: 150,
		onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
		onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
		onRemove: function (evt){ console.log('onRemove.bar:', evt.item); },
		onStart:function(evt){ console.log('onStart.foo:', evt.item);},
		onEnd: function(evt){ console.log('onEnd.foo:', evt.item);}
	});
   
	// Sortable.create(multi, {
	// 	animation: 150,
	// 	draggable: '.tile',
	// 	handle: '.tile__name'
	// });

	// var editableList = Sortable.create(editable, {
	// 	animation: 150,
	// 	filter: '.js-remove',
	// 	onFilter: function (evt) {
	// 		evt.item.parentNode.removeChild(evt.item);
	// 	}
	// });

	// addUser.onclick = function () {
	// 	Ply.dialog('prompt', {
	// 		title: 'Add',
	// 		form: { name: 'name' }
	// 	}).done(function (ui) {
	// 		var el = document.createElement('li');
	// 		el.innerHTML = ui.data.name + '<i class="js-remove">✖</i>';
	// 		editableList.el.appendChild(el);
	// 	});
	// };

	// [].forEach.call(multi.getElementsByClassName('tile__list'), function (el){
	// 	Sortable.create(el, {
	// 		group: 'photo',
	// 		animation: 150
	// 	});
	// });

	// [{
	// 	name: 'advanced',
	// 	pull: true,
	// 	put: true
	// },

	// {
	// 	name: 'advanced',
	// 	pull: 'clone',
	// 	put: false
	// }, {

	// 	name: 'advanced',
	// 	pull: false,
	// 	put: true
	// }].forEach(function (groupOpts, i) {
	// 	Sortable.create(document.getElementById('advanced-' + (i + 1)), {
	// 		sort: (i != 1),
	// 		group: groupOpts,
	// 		animation: 150
	// 	});
	// });

	// Sortable.create(document.getElementById('handle-1'), {
	// 	handle: '.drag-handle',
	// 	animation: 150
	// });

	angular.module('todoApp', ['ng-sortable'])
		.controller('TodoController', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'learn angular', done: true},
				{text: 'build an angular app', done: false}
			];

			$scope.addTodo = function () {
				$scope.todos.push({text: $scope.todoText, done: false});
				$scope.todoText = '';
			};

			$scope.remaining = function () {
				var count = 0;
				angular.forEach($scope.todos, function (todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			$scope.archive = function () {
				var oldTodos = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldTodos, function (todo) {
					if (!todo.done) $scope.todos.push(todo);
				});
			};
		}])

		.controller('TodoControllerNext', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'learn Sortable', done: true},
				{text: 'use ng-sortable', done: false},
				{text: 'Enjoy', done: false}
			];

			$scope.remaining = function () {
				var count = 0;
				angular.forEach($scope.todos, function (todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			$scope.sortableConfig = { group: 'todo', animation: 150 };
			'Start End Add Update Remove Sort'.split(' ').forEach(function (name) {
				$scope.sortableConfig['on' + name] = console.log.bind(console, name);
			});

		}]);

})();

// Background
document.addEventListener( "DOMContentLoaded", function (){
	function setNoiseBackground(el, width, height, opacity){
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");
		canvas.width = width;
		canvas.height = height;
		for( var i = 0; i < width; i++ ){
			for( var j = 0; j < height; j++ ){
				var val = Math.floor(Math.random() * 255);
				context.fillStyle = "rgba(" + val + "," + val + "," + val + "," + opacity + ")";
				context.fillRect(i, j, 1, 1);
			}
		}
		el.style.background = "url(" + canvas.toDataURL("image/png") + ")";
	}
	setNoiseBackground(document.getElementsByTagName('body')[0], 50, 50, 0.02);

}, false );