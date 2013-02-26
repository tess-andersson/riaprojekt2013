// ### Main router
// _Defines default routes and actions_
define([
    'jquery',
    'backbone',
    'app/views/app-view',
    'app/models/list',
    'app/collections/list-collection',
    'app/views/list/show-list-view'
], function( $, Backbone, AppView, ListModel, ListCollection, ShowListView ) {
    
    var AppRouter = Backbone.Router.extend({      
        
        initialize: function() {
            this.list_collection = new ListCollection();
            this.list_collection.fetch();
            
            // Primary placeholders
            this.sidebar = "#sidebar";
            this.main = "#main";       
        },
        
        routes: {
            '': 'index',
            'list/:id': 'list',
            '*actions': 'defaultRoute'
        },

        index: function() {
            // Initialize and render a new AppView  
            var app_view = new AppView({ el: $( this.sidebar ), collection: this.list_collection, model: new ListModel() });
            app_view.render();
        },
        
        // Buggar ur - routes + sidebar?
        list: function( id ) {
            
            //this.index();
            
            var model = this.list_collection.get(id);
            var list_view = new ShowListView( { el: $( this.main ), model: model } );
            list_view.render(); 
        },

        defaultRoute: function( action ) {
            console.log('Route: ' + action);
        }
    });
    // Starts up the application
    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };
    
    return {
        initialize: initialize
    };

});