//组件属性
var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return (
			React.createElement("div", {className: "commentList"}, 
				React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
				React.createElement(Comment, {author: "Jordan Wake"}, "This is *author* comment")
			)
		);
	}
});
