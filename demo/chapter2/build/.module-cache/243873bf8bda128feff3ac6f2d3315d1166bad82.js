/**
 * 制作组件：
 * 动态地渲染评论
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				React.createElement(Comment, {author: comment.author, key: comment.author}, 
					comment.text
				)
			);
		});
		return (
			React.createElement("div", {className: "commentList"}, 
				commentNodes
			)
		);
	}
});