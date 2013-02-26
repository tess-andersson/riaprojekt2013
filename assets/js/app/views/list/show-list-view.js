// ### ShowListView
// _Render display of list_
define([
	'jquery',
	'underscore',
	'backbone',
	'text!app/templates/list.html',
	'app/models/task',
	'app/views/task/task-view',
	'app/views/task/create-task-view'
], function( $, _, Backbone, ListTemplate, TaskModel, TaskView, CreateTaskView ) {

	var ShowListView = Backbone.View.extend({

		tagName: 'div',
		className: 'list-container',

		template: _.template( ListTemplate ),

		initialize: function() {
			this.tasks = this.model.get( 'tasks' );
			
			// Listening to changes on tasks
			this.listenTo( this.tasks, 'add', this.render );
			this.listenTo( this.tasks, 'remove', this.render );
		},

		events: { 
			'click .add-task' : 'addTask',
		},

		render: function() {
			this.$el.html( this.template( { list: this.model.toJSON(), tasks: this.tasks	} ) );
			
			var that = this;
			
			// Add tasks to el		
			this.tasks.forEach( function( t ){
				var task_view = new TaskView( { model: t } );
				that.$el.append( task_view.render().el );
			});

			return this;
		},
		
		addTask: function() {
			// Clean up
			var create_task_div = this.$el.find('.create-task');
			if( create_task_div ) {
				create_task_div.remove();
			}
			
			var create_task_view = new CreateTaskView( { model: this.model });
			this.$el.append( create_task_view.render().el );
		},
	

	});

	return ShowListView;
});