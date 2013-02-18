define([
	'jquery',
	'underscore',
	'backbone',
	'text!app/templates/myTemplate.html'
], function( $, _, Backbone, myTemplate ) {
	
	var HomeView = Backbone.View.extend({
		
		tagName: 'li',
		
		template: _.template( myTemplate ),
		
		initialize: function() {},
		
		events: { },
		
		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		}
	});
	
	return HomeView;
});