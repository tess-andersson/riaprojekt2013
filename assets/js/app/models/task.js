define([
	'backbone'
	], function( Backbone ){

		var TaskModel = Backbone.RelationalModel.extend({

			initialize: function() {
				console.log( 'TaskModel init' );
			},
			
			defaults: {
				content: 'Det här måste göras',
				complete: false
			},
			
			idAttribute: '_id'

		});

		return TaskModel;	
});