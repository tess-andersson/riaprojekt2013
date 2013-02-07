// ### Main setup
// Initializes the primary router
define([
	"jquery",
	"underscore",
	"backbone",
	"app/routers/router"
], function( $, _, Backbone, Router ) {
	var initialize = function() {
		console.log( 'app.js initialize()' );
		Router.initialize();
	};
	return {
		initialize: initialize
	};
});