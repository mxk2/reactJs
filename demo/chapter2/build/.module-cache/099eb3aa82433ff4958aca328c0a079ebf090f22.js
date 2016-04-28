/**
 * 制作组件：
 * Markdown是一种简单的格式化内联文本的方式，可以将Markdown文本转换成原生HTML。
 * 添加Markdown语法格式的评论
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var Comment = React.createClass({displayName: "Comment",
	render: function(){
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, 
					this.props.author
				), 
				marked(this.props.children.toString())
			)
		);
	}
});
