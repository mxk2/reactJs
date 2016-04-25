var CommentBox = Reqct.createClass({
	render: function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
		);
	}
});
