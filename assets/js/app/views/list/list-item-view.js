// ### ListItemView
// _Rendering one list item in sidebar_
define([
	'jquery',
	'underscore',
	'backbone',
	'text!app/templates/_list-item.html',
	'app/views/list/show-list-view'
], function( $, _, Backbone, ListItemTemplate, ShowListView ) {

	var ListItemView = Backbone.View.extend({

		tagName: 'li',
		className: 'list-item',

		template: _.template( ListItemTemplate ),

		initialize: function() {
			this.tasks = this.model.get('tasks');
		},

		events: {
			'click .delete-btn' : 'deleteList',
			'click .show-list' : 'showList',
			'mouseover' : 'toggleDelete',
			'mouseout' : 'toggleDelete'
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},
		
		showList: function() {
			var list_view = new ShowListView({ el: $('#main'), model: this.model });
			list_view.render();
		},
		
		deleteList: function( e ) {
			this.model.destroy();
			this.$el.remove();
		},
		
		toggleDelete: function() {
			var that = this;
			
			if( this.$('.delete-btn').hasClass('hide') ){
				that.$('.delete-btn').removeClass('hide').addClass('show');
			} else {
				that.$('.delete-btn').removeClass('show').addClass('hide');
			}
		}

	});

	return ListItemView;
});