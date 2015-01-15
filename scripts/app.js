$(document).ready(function() {

	var listo = [];

	$('#newTaskForm').hide();

	var Task = function(task) {
		this.task = task;
		this.id = "new";
	};

	var addTask = function (task) {
		if (task) {
			task = new Task(task);
			listo.push(task);

			$('#newItemInput').val('');

			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

		};
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	};

	$('saveNewItem').on('click', function (e) {
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	});

	//Opens form
	$('#newListItem').on('click', function () {
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});

	//Closes form
	$('#cancel').on('click', function (e) {
		e.preventDefault();
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});





});