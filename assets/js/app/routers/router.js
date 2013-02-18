define([
    'jquery',
    'backbone',
    'app/views/home/home-view',
    'app/models/list'
], function( $, Backbone, HomeView, ListModel ) {
    var AppRouter = Backbone.Router.extend({
        
        // Placeholders for main content
        mainPlaceholder: '#main',
        
        routes: {
            '': 'index',
            'lists/:id': 'lists',
            '*actions': 'defaultRoute'
        },

        index: function() {
            // Enbart för test av modell + vy
            var list_model = new ListModel({ title: 'Min lista' });
            var homeView = new HomeView({ el: $( this.mainPlaceholder ), model: list_model });
            
            // Render home view
            homeView.render();
        },

        lists: function() {
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