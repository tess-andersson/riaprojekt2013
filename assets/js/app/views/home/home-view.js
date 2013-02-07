define([
	"jquery",
	"underscore",
	"backbone"
], function( $, _, Backbone ) {
	
	var HomeView = Backbone.View.extend({
		
		el: $("#content"),
		
		initialize: function() {},
		
		render: function() {
			console.log( "HomeView.render()" );
			this.$el.append( "<h2>Hello RIA!</h2>" );
		}
	});
	
	return HomeView;
});