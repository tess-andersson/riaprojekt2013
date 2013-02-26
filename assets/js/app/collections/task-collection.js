// ### Collection for tasks
define([
	"backbone",
	'app/models/task'
], function( Backbone, TaskModel ) {

	var TaskCollection = Backbone.Collection.extend({

		model: TaskModel,
		url: 'tasks',

		localStorage: new Backbone.LocalStorage( 'Tasks' ),

		initialize: function() {
			this.fetch();
		}
	});

	return TaskCollection;
});