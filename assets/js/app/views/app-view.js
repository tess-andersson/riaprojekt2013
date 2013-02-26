// ### AppView
// _Main application view_
define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/list-collection',
	'app/views/list/list-item-view',
	'text!app/templates/sidebar.html'
], function( $, _, Backbone, ListCollection, ListItemView, SidebarTemplate ) {

	var AppView = Backbone.View.extend({
		
		template: _.template( SidebarTemplate ),

		initialize: function() {
			this.listenTo( this.collection, 'add', this.addList );	
			this.collection.fetch();
		},

		events: { 
			'keypress .add-list' : 'addListOnEnter'
		},
		
		// Render sidebar and add stored lists
		render: function() {
			this.$el.html( this.template() );
			this.addLists();	
		},

		addList: function( listModel ) {
			// Refactor this
			listModel.save();
			var list_view = new ListItemView( { model: listModel } );
			
			this.$('#all-lists').append( list_view.render().el );
		},
		
		addLists: function() {
			this.$('#all-lists').html('');
			this.collection.each( this.addList, this );
			return this;
		},
		
		addListOnEnter: function( e ) {
			
			if( e.keyCode === 13 ) {
				this.submitInput();
				return false;
			} else {
				return;
			}
		},
		
		submitInput: function() {
			var list_title = this.$('.add-list').val();
			this.collection.create({ title: list_title });
			this.$('.add-list').val('');
		}
		
	});

	return AppView;
});