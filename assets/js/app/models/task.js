// ### Model for Task
// _Defines default setup and relations_
define([
	'backbone'
	], function( Backbone ){

		var TaskModel = Backbone.RelationalModel.extend({

			initialize: function() { },	

			defaults: {
				content: 'Ny task',
				complete: false
			},
		});

		return TaskModel;	
});