// ### TaskView
// _Display all tasks for one list_
define([
	'jquery',
	'underscore',
	'backbone',
	'app/models/task',
	'app/collections/task-collection',
	'text!app/templates/tasks.html'
], function( $, _, Backbone, TaskModel, TaskCollection, TaskTemplate ) {

	var TaskView = Backbone.View.extend({

		tagName: 'div',
		className: 'row task-item',

		template: _.template( TaskTemplate ),

		initialize: function() { 
			this.listenTo( this.model, 'add', this.render );
			this.listenTo( this.model, 'change', this.render );
			
			// Get associated list
			this.list = this.model.get( 'list' );
		},
		
		events: {
			'change #complete' : 'toggleComplete',
			'click .delete-task' : 'deleteTask'
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},
		
		deleteTask: function() {
			this.list.get( 'tasks' ).get( this.model ).destroy();
			this.list.save();
		},
		
		toggleComplete: function() {
			if( this.model.get( 'complete' ) === false ) {
				this.model.set( 'complete', true );
			} else {
				this.model.set( 'complete', false );
			}
			
			this.list.trigger( 'add:task', this.model );

		}
	});

	return TaskView;
});