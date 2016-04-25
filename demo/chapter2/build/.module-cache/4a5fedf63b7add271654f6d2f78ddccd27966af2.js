var Comment = React.createClass({displayName: "Comment",
	rawMarkup: function(){
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return {__html: rawMarkup};
	},
	render: function(){
		
	}
});
