define([
	'backbone',
	'app/models/task'
	], function( Backbone, TaskModel ){
		
		var ListModel = Backbone.RelationalModel.extend({
						
			initialize: function() {
				console.log( 'Listmodel init' );
			},
			
			defaults: {
				title: 'Tom lista'
			},
			
			idAttribute: 'id',
			
			relations: [{
				type: Backbone.HasMany,
				relatedModel: TaskModel,
				key: 'tasks',
				reverseRelation: {
					key: 'project',
					includeInJSON: 'id'
				}
			}]
			
		});
		
		return ListModel;	
});