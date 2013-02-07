require.config({
	paths: {
		jquery: 'lib/jquery/jquery-1.9.1.min',
		underscore: 'lib/underscore/underscore-min',
		backbone: 'lib/backbone/backbone',
		localStorage: 'lib/backbone/localstorage/backbone.localStorage'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		localStorage: {
			deps: ['backbone']
		}
	}
});
require(["app/app"], function( App ) {
	App.initialize();
});