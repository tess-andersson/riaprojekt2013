// ### Main setup
// Initializes the primary router
define([
	"backbone",
	"app/routers/router"
], function( Backbone, Router ) {
	var initialize = function() {
		Router.initialize();
	};
	return {
		initialize: initialize
	};
});