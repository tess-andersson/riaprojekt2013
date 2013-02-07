define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/home/home-view'
], function( $, _, Backbone, HomeView ) {
    var AppRouter = Backbone.Router.extend({
        
        routes: {
            '': 'index',
            'todos': 'todos',
            '*actions': 'defaultRoute'
        },

        index: function() {
            console.log('Route: index');
            var homeView = new HomeView();
            homeView.render();
        },

        todos: function() {
            console.log('Route: todos');
        },

        defaultRoute: function( action ) {
            console.log('Route: ' + action);
        }
    });

    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };
    
    return {
        initialize: initialize
    };

});