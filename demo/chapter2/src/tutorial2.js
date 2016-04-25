/**
 * 制作组件：
 * 为CommentList和CommentForm搭建骨架。
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				Hello, world! I am a CommentList.
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		);
	}
});
