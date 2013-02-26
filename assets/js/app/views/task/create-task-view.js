// ### CreateTaskView
// _Rendering simple form for adding task_
define([
	'jquery',
	'underscore',
	'backbone',
	'text!app/templates/_create-task.html',
	'app/models/task'
], function( $, _, Backbone, TaskTemplate, TaskModel ) {

	var CreateTaskView = Backbone.View.extend({

		tagName: 'div',
		className: 'row create-task',

		template: _.template( TaskTemplate ),

		initialize: function() { 
			this.task = new TaskModel();
		},

		events: {
			'click #create-task-btn' : 'createTask',
			'click .cancel' : 'cancelCreate'
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},
		
		createTask: function() {
			this.task.set( 'content', this.$('.task-content').val() );
			this.saveTask();
		},
		
		saveTask: function() {
			this.model.trigger( 'add:task', this.task );
		},
		
		cancelCreate: function() {
			this.$el.remove();
		}

	});

	return CreateTaskView;
});